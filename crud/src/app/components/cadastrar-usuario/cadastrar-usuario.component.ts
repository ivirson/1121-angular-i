import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { filter, first } from 'rxjs';
import { Pages } from 'src/app/constants/pages.enum';
import { AddressDto } from 'src/app/models/address.dto';
import { Address, User } from './../../models/user.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  @Input() userId?: string;
  @Output() redirectEmitter = new EventEmitter<Pages>();

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

  apiKey = 'f86b4e832a83424b9a38d5c76ec47612';
  apiUrl = `https://crudcrud.com/api/${this.apiKey}/users`;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // this.userForm.patchValue(this.user);
    this.setZipCodeSubscription();

    if (this.userId) {
      this.getUserById();
    }
  }

  getUserById(): void {
    const url = `${this.apiUrl}/${this.userId}`;
    this.http
      .get<User>(url)
      .pipe(first())
      .subscribe({
        next: (response: User) => {
          this.userForm.patchValue(response);
        },
        error: (err) => {
          console.log(err);
        },
      });
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
    if (this.userId) {
      return this.updateUser(user as User);
    }

    return this.saveUser(user as User);
  }

  saveUser(user: User): void {
    this.http
      .post<User>(this.apiUrl, user)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.redirectEmitter.emit(Pages.LIST);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }

  updateUser(user: User): void {
    const url = `${this.apiUrl}/${this.userId}`;
    this.http
      .put<User>(url, user)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.redirectEmitter.emit(Pages.LIST);
        },
        error: (err) => {
          console.error(err);
        },
      });
  }
}
