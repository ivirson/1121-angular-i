import { Component, OnInit } from '@angular/core';
import { Pages } from './constants/pages.enum';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { CadastrarUsuarioComponent } from './components/cadastrar-usuario/cadastrar-usuario.component';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
        NgIf,
        CadastrarUsuarioComponent,
        ListarUsuariosComponent,
    ],
})
export class AppComponent implements OnInit {
  currentPage: Pages = Pages.LIST;

  pages = Pages;

  goToPage(page: Pages): void {
    this.currentPage = page;
  }
  // obs = new Observable((observer) => {
  //   console.log('Início');

  //   // observer.next('1');
  //   // setTimeout(() => {
  //   //   observer.next('2');
  //   // }, 4000);
  //   // setTimeout(() => {
  //   //   observer.next('3');
  //   // }, 2000);

  //   // observer.next('4');

  //   // setTimeout(() => {
  //   //   observer.next('5');
  //   // }, 1000);
  //   // setTimeout(() => {
  //   //   observer.next('6');
  //   // }, 5000);
  //   // setTimeout(() => {}, 1000);
  //   // observer.next('7');

  //   let cont = 0;
  //   setInterval(() => {
  //     observer.next(cont++);
  //     // observer.error('Deu ruim!');
  //     if (cont > 5) {
  //       observer.complete();
  //     }
  //   }, 1000);
  // });

  ngOnInit(): void {
    // this.obs
    //   // .pipe(take(1), filter())
    //   .subscribe({
    //     next: (response) => {
    //       console.log(response);
    //     },
    //     error: (err) => {
    //       console.error(err);
    //     },
    //     complete: () => {
    //       console.log('Fim!');
    //     },
    //   });
  }
}
