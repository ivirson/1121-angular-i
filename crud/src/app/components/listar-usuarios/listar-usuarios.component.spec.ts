import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarUsuariosComponent } from './listar-usuarios.component';

describe('ListarUsuariosComponent', () => {
  let component: ListarUsuariosComponent;
  let fixture: ComponentFixture<ListarUsuariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ListarUsuariosComponent]
});
    fixture = TestBed.createComponent(ListarUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
