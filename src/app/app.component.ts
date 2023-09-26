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
    {path: '/contact', title: 'Contact'},
    {path: '/services', title: 'Services'},
    {path: '/support', title: 'Support'},
    {path: '/login', title: 'Login'},
    {path: '/sing-up', title: 'Sing Up'},
  ]
}
