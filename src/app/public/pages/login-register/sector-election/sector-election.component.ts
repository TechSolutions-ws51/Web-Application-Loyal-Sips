import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-election',
  templateUrl: './sector-election.component.html',
  styleUrls: ['./sector-election.component.css']
})
export class SectorElectionComponent {

  constructor(private router: Router) {
  }

  redirectToClientLogin() {
    this.router.navigate(["/login-register/cliente"]);  // Redirige a la ruta deseada
  }

  redirectToEmpresaLogin() {
    this.router.navigate(["/login-register/empresa"]);  // Redirige a la ruta deseada
  }

}
