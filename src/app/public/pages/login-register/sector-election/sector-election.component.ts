import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector-election',
  templateUrl: './sector-election.component.html',
  styleUrls: ['./sector-election.component.css']
})
export class SectorElectionComponent {
  isInactive: boolean = false; // Declare the isInactive property of type boolean with an initial value of false

  constructor(private router: Router) {}

  onLoginButtonClick() {
    // ...
    // Remove the login form
    const loginForm = document.querySelector('.login');
    if (loginForm && loginForm.parentNode) {
      loginForm.parentNode.removeChild(loginForm);
    }

    // Set the isInactive property to true
    this.isInactive = true; // Access the isInactive property using this
  }
}
