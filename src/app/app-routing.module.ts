import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementsComponent } from './add-vetements/add-vetements.component';
import { UpdateVetementsComponent } from './update-vetements/update-vetements.component';
import { LoginComponent } from './login/login.component';
import { ProduitGuard } from './services/produit.guard';
import { ForbiddenComponent } from './services/forbidden/forbidden.component';
import { RechercheParVetementsComponent } from './recherche-par-vetements/recherche-par-vetements.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeTypesComponent } from './liste-types/liste-types.component';
import { RegisterComponent } from './register/register.component';
import { VerifEmailComponent } from './verif-email/verif-email.component';

const routes: Routes = [
  {path: "vetements", component : VetementsComponent},
  {path: "add-vetements", component : AddVetementsComponent,canActivate:[ProduitGuard]},
  {path: "updatevetements/:id", component: UpdateVetementsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'app-forbidden', component: ForbiddenComponent},
  {path: "recherche-par-vetements", component : RechercheParVetementsComponent},
  {path: "rechercheParNom", component : RechercheParNomComponent},
  { path: "", redirectTo: "vetements", pathMatch: "full" },
  {path:'register',component:RegisterComponent},
  { path: 'verifEmail', component: VerifEmailComponent }, 
  {path: "listeTypes", component : ListeTypesComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

