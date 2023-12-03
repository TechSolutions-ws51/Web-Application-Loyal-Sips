import { Component } from '@angular/core';
import {Router} from "@angular/router";

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

  // Inyecta el servicio de Router en el constructor
  constructor(private router: Router) { }

  // Este método se llama cuando el usuario hace clic en el botón de login
  onLoginButtonClick() {
    // Aquí puedes realizar la lógica de autenticación si es necesario

    // Redirige al usuario a la página de inicio
    this.router.navigate(['/profile']); // Puede ser la ruta de la página de inicio en tu configuración

    // Elimina el formulario de inicio de sesión si existe
    const loginForm = document.querySelector('.login');
    if (loginForm && loginForm.parentNode) {
      loginForm.parentNode.removeChild(loginForm);
    }

    // Establece la propiedad `isInactive` en `true`
    this.isInactive = true;
  }

}
