import { AppComponent } from '../app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPrimarioComponent } from './cat/admin-primario/admin-primario.component'; 
import { CarteraGuard } from '../guards/cartera.guard'; 
import { NopagefoundComponent } from './nopagefound/nopagefound.component'; 
import { CarterasComponent } from './cat/carteras/carteras.component'; 
import { DetailCarteraComponent } from './cat/carteras/detail-cartera/detail-cartera.component';
import { ComportamientoComponent } from './cat/carteras/comportamiento/comportamiento.component';

const routes: Routes = [
  { path:'carteras', component:CarterasComponent,canActivate:[CarteraGuard] },  
  { path:'detalle-cartera', component:DetailCarteraComponent,canActivate:[CarteraGuard] },  
  { path:'comportamiento',component:ComportamientoComponent,canActivate:[CarteraGuard]},
  { path:'primario', component:AdminPrimarioComponent,canActivate:[CarteraGuard] },  
  { path: '**', component:NopagefoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }