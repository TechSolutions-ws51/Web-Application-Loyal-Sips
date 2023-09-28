import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {ServicesComponent} from "./public/pages/services/services.component";
import {SupportComponent} from "./public/pages/support/support.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";
import {LoginComponent} from "./public/pages/login/login.component";
import {SignUpComponent} from "./public/pages/sign-up/sign-up.component";
import {DrinksComponent} from "./tp1/pages/customers/drinks.component";
const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'services', component: ServicesComponent},
  { path:'support', component: SupportComponent},
  { path:'login', component: LoginComponent},
  { path:'sign-up', component: SignUpComponent},
  { path:'drinks', component: DrinksComponent},
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path :'**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
