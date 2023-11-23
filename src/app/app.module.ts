import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LanguageSelectionComponent } from './public/components/language-selection/language-selection.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DrinksService} from "./tp1/services/drinks.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
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
import { SignUpComponent } from './public/pages/sign-up/sign-up.component';
import { DrinkFormComponent } from './tp1/components/drink-form/drink-form.component';
import {DrinksComponent} from "./tp1/pages/drinks/drinks.component";
import { ProfileComponent } from './public/pages/profile/profile.component';
import { BaresComponent } from './public/pages/bares/bares.component';
import { Bar1Component } from './public/pages/bar1/bar1.component';
import { PubsComponent } from './tp1/pages/pubs/pubs.component';
import { LoginRegisterClienteComponent } from './public/pages/login-register/login-register-cliente/login-register-cliente.component';
import { LoginRegisterEmpresaComponent } from './public/pages/login-register/login-register-empresa/login-register-empresa.component';
import { SectorElectionComponent } from './public/pages/login-register/sector-election/sector-election.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {IngredientFormComponent} from "./tp1/components/ingredient-form/ingredient-form.component";
import {IngredientsService} from "./tp1/services/ingredients.service";
import {IngredientsComponent} from "./tp1/pages/ingredients/ingredients.component";
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientFormComponent,
    IngredientsComponent,
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    SupportComponent,
    ContactComponent,
    PageNotFoundComponent,
    LoginComponent,
    LanguageSelectionComponent,
    SignUpComponent,
    DrinksComponent,
    DrinkFormComponent,
    ProfileComponent,
    BaresComponent,
    Bar1Component,
    PubsComponent,
    LoginRegisterClienteComponent,
    LoginRegisterEmpresaComponent,
    SectorElectionComponent,
  ],
  imports: [
    TranslateModule.forRoot({
      defaultLanguage: 'en', loader: {
        provide: TranslateLoader, useFactory: (createTranslateLoader), deps: [HttpClient]
      }
    }),
    MatSelectModule,
    MatOptionModule,
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
  providers: [DrinksService,IngredientsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
