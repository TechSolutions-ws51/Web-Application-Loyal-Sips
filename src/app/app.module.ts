import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "./tp1/services/customer.service";
import { CustomersComponent } from './tp1/pages/customers/customers.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatDividerModule} from "@angular/material/divider";
import { HomeComponent } from './public/pages/home/home.component';
import { AboutComponent } from './public/pages/about/about.component';
import { ServicesComponent } from './public/pages/services/services.component';
import { SupportComponent } from './public/pages/support/support.component';
import { ContactComponent } from './public/pages/contact/contact.component';
import { PageNotFoundComponent } from './public/pages/page-not-found/page-not-found.component';
import { LoginComponent } from './public/pages/login/login.component';
import { SingUpComponent } from './public/pages/sing-up/sing-up.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SupportComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    SingUpComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
