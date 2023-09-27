import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TP1';
  options = [
    {path: '/home', title: 'Home'},
    {path: '/about', title: 'About'},
    {path: '/services', title: 'Services'},
    {path: '/drinks', title: 'Drinks'},
    {path: '/support', title: 'Support'},
    {path: '/contact', title: 'Contact'},
    {path: '/login', title: 'Login'},
    {path: '/sign-up', title: 'Sing Up'},
  ]
}
