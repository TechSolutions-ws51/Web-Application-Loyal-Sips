import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /*Aqui  se muestra lo que se ve en el Navbar*/
  title = 'TP1';
  options = [
    { path: '/home', title: 'Home' },
    //{ path: '/about', title: 'About' },
    //{ path: '/services', title: 'Services' },
    { path: '/bares', title: 'Bares' },
    { path: '/drinks', title: 'Drinks' },
    //{ path: '/contact', title: 'Contact' },
    //{ path: '/login', title: 'Login' },
    //{ path: '/sign-up', title: 'Sing Up' },
    { path: '/profile', title: 'Profile' },
    { path: '/support', title: 'Support' },
    { path: '/login-register', title: 'Login' },
  ];

  /* Determina si la pantalla tiene valor pequeño */
  showNavigationButtons:boolean= false;


  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  toggleSidenav() {
    this.showNavigationButtons = !this.showNavigationButtons;
  }
  constructor(private translate: TranslateService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang && browserLang.match(/en|es/) ? browserLang : 'es');

  }
}
