import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarUsuarioComponent } from './cadastrar-usuario.component';

describe('CadastrarUsuarioComponent', () => {
  let component: CadastrarUsuarioComponent;
  let fixture: ComponentFixture<CadastrarUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarUsuarioComponent]
    });
    fixture = TestBed.createComponent(CadastrarUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
