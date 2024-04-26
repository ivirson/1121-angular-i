import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, first } from 'rxjs';
import { AddressDto } from 'src/app/models/address.dto';
import { Address, User } from './../../models/user.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z_]+$/),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    profession: new FormControl('', [Validators.required]),
    documentNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    birthDate: new FormControl('', [Validators.required]),
    monthlyIncome: new FormControl('', [Validators.required]),
    address: new FormGroup({
      zipCode: new FormControl('', [Validators.required]),
      street: new FormControl('', [Validators.required]),
      number: new FormControl('', [Validators.required]),
      complement: new FormControl(),
      district: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
    }),
  });

  apiUrl = `https://crudcrud.com/api/0c3f823a450b457db58fe8b8c5a9ad15/users`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.userForm.patchValue(this.user);
    this.setZipCodeSubscription();
  }

  private setZipCodeSubscription(): void {
    this.userForm.controls.address.controls.zipCode.valueChanges
      .pipe(filter((value) => value?.length === 8))
      .subscribe((value) => {
        this.getAddressByZipCode(value as string);
      });
  }

  private getAddressByZipCode(zipCode: string): void {
    this.http
      .get<AddressDto>(`https://viacep.com.br/ws/${zipCode}/json/`)
      .pipe(first())
      .subscribe({
        next: (response: AddressDto) => {
          const address: Partial<Address> = {
            // zipCode: response.cep,
            street: response.logradouro,
            complement: response.complemento,
            district: response.bairro,
            city: response.localidade,
            state: response.uf,
          };

          this.userForm.controls.address.patchValue(address);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  onSave(): void {
    const user = this.userForm.getRawValue();
    // TO DO Ivirson - Verificar erro no User
    // const user: User = this.userForm.getRawValue();
    this.http
      .post<User>(this.apiUrl, user)
      .pipe(first())
      .subscribe({
        next: (response: User) => {
          console.log(response);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
