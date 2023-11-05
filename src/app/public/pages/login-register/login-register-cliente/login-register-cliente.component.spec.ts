import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterClienteComponent } from './login-register-cliente.component';

describe('LoginRegisterClienteComponent', () => {
  let component: LoginRegisterClienteComponent;
  let fixture: ComponentFixture<LoginRegisterClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginRegisterClienteComponent]
    });
    fixture = TestBed.createComponent(LoginRegisterClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
