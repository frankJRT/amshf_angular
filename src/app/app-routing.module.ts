import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AdminPrimarioComponent } from './pages/cat/admin-primario/admin-primario.component';
import { CarterasComponent } from './pages/cat/carteras/carteras.component';
import { CarteraGuard } from './guards/cartera.guard';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'dashboard', component:DashboardComponent },
  { path:'signup', component:SignupComponent },
  { path:'login', component:LoginComponent },
  { path:'carteras', component:CarterasComponent,canActivate:[CarteraGuard] },  
  { path:'primario', component:AdminPrimarioComponent,canActivate:[CarteraGuard] },  
  { path: '**', redirectTo:'', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
