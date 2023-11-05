import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterEmpresaComponent } from './login-register-empresa.component';

describe('LoginRegisterEmpresaComponent', () => {
  let component: LoginRegisterEmpresaComponent;
  let fixture: ComponentFixture<LoginRegisterEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisterEmpresaComponent]
    });
    fixture = TestBed.createComponent(LoginRegisterEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
