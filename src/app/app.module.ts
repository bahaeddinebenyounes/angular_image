import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementsComponent } from './vetements/vetements.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { UpdateVetementsComponent } from './update-vetements/update-vetements.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { RechercheParVetementsComponent } from './recherche-par-vetements/recherche-par-vetements.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { UpdateTypeComponent } from './update-type/update-type.component';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';
import { ToastrModule } from 'ngx-toastr'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    VetementsComponent,
    AddVetementsComponent,
    UpdateVetementsComponent,
    LoginComponent,
    ForbiddenComponent,
    RechercheParVetementsComponent,
    RechercheParNomComponent,
    ListeTypesComponent,
    UpdateTypeComponent,
    RegisterComponent,
    VerifEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
  ],
  providers: [{ provide : HTTP_INTERCEPTORS,
    useClass : TokenInterceptor,
    multi : true}
     ],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
