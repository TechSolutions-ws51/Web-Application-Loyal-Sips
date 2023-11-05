import { Component } from '@angular/core';

@Component({
  selector: 'app-login-register-cliente',
  templateUrl: './login-register-cliente.component.html',
  styleUrls: ['./login-register-cliente.component.css']
})
export class LoginRegisterClienteComponent {

  isActive: boolean = false; // Inicialmente, isActive se establece en false
  isInactive: boolean = true;
  toggleActive() {
    this.isActive = !this.isActive; // Cambia el valor de isActive cuando se llama
  }

  toggleInactive(){
    this.isInactive= !this.isInactive;
  }



}
