import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { Address, User } from 'src/app/models/user.model';
import { CadastrarUsuarioComponent } from '../cadastrar-usuario/cadastrar-usuario.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
    selector: 'app-listar-usuarios',
    templateUrl: './listar-usuarios.component.html',
    styleUrls: ['./listar-usuarios.component.css'],
    standalone: true,
    imports: [
        NgFor,
        NgIf,
        CadastrarUsuarioComponent,
    ],
})
export class ListarUsuariosComponent implements OnInit {
  apiKey = 'b4c6a52f61a94677a9a5788dd6586614';
  apiUrl = `https://crudcrud.com/api/${this.apiKey}/users`;

  users?: User[];
  userId?: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void {
    this.http
      .get<User[]>(this.apiUrl)
      .pipe(first())
      .subscribe({
        next: (response) => {
          this.users = response;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  addressMapper(address: Address): string {
    return `
      ${address.street}, ${address.number}, ${address.complement}. 
      CEP: ${address.zipCode}. 
      ${address.city} - ${address.state}. ${address.country}`;
  }

  deleteUser(id: string): void {
    const url = `${this.apiUrl}/${id}`;
    this.http
      .delete(url)
      .pipe(first())
      .subscribe({
        complete: () => {
          this.getUsers();
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  setUserId(id: string): void {
    this.userId = id;
  }
}
