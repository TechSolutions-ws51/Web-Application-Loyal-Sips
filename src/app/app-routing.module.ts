import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersComponent} from "./tp1/pages/customers/customers.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {AboutComponent} from "./public/pages/about/about.component";
import {ContactComponent} from "./public/pages/contact/contact.component";
import {ServicesComponent} from "./public/pages/services/services.component";
import {SupportComponent} from "./public/pages/support/support.component";
import {PageNotFoundComponent} from "./public/pages/page-not-found/page-not-found.component";

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'contact', component: ContactComponent},
  { path:'services', component: ServicesComponent},
  { path:'support', component: SupportComponent},
  { path:'', redirectTo: 'home', pathMatch: 'full'},
  { path :'customers', component: CustomersComponent },
  { path :'**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
