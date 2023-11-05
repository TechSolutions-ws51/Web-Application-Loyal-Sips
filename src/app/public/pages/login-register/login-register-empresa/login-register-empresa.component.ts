import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register-empresa',
  templateUrl: './login-register-empresa.component.html',
  styleUrls: ['./login-register-empresa.component.css']
})
export class LoginRegisterEmpresaComponent {

  isActive: boolean = false; // Inicialmente, isActive se establece en false
  isInactive: boolean = true;
  toggleActive() {
    this.isActive = !this.isActive; // Cambia el valor de isActive cuando se llama
  }

  toggleInactive(){
    this.isInactive= !this.isInactive;
  }

}
