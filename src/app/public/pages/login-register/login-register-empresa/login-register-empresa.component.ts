import { Component } from '@angular/core';
import {Router} from "@angular/router";

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
  constructor(private router: Router) { }

  // Este método se llama cuando el usuario hace clic en el botón de login
  onLoginButtonClick() {
    // Aquí puedes realizar la lógica de autenticación si es necesario

    // Redirige al usuario a la página de inicio
    this.router.navigate(['/']); // Puede ser la ruta de la página de inicio en tu configuración
  }


}
