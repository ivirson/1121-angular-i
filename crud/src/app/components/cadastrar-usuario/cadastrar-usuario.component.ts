import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
})
export class CadastrarUsuarioComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(2),
      Validators.pattern(/^[a-zA-Z_]+$/),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    profession: new FormControl(null, [Validators.required]),
    documentNumber: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    birthDate: new FormControl(null, [Validators.required]),
    monthlyIncome: new FormControl(null, [Validators.required]),
    address: new FormGroup({
      zipCode: new FormControl(null, [Validators.required]),
      street: new FormControl(null, [Validators.required]),
      number: new FormControl(null, [Validators.required]),
      complement: new FormControl(),
      district: new FormControl(null, [Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      country: new FormControl(null, [Validators.required]),
    }),
  });

  user: User = {
    name: 'Ivirson',
    email: 'ivi.daltro@email.com',
    profession: 'Dev',
    documentNumber: '01234567890',
    birthDate: '2000-01-01',
    monthlyIncome: 1000,
    address: {
      complement: 'Casa do fundo',
      country: 'Brasil',
      district: 'Bairro B',
      number: 5,
      state: 'BA',
      street: 'Rua A',
      zipCode: '42800049',
      city: 'Camaçari',
    },
  };

  ngOnInit(): void {
    // this.userForm.patchValue(this.user);
  }

  onSave(): void {
    const user = this.userForm.getRawValue();
    // TO DO Ivirson - Verificar erro no User
    // const user: User = this.userForm.getRawValue();
    console.log(user);
  }
}
