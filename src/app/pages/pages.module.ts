import { NgModule } from "@angular/core";
import { AdminPrimarioComponent } from './cat/admin-primario/admin-primario.component'; 
import { CarterasComponent } from "./cat/carteras/carteras.component";
import { ListCarteraComponent } from "./cat/carteras/list-cartera/list-cartera.component";
import { DetailCarteraComponent } from "./cat/carteras/detail-cartera/detail-cartera.component";
import { MaterialModule } from "../material.modules";
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComportamientoComponent } from "./cat/carteras/comportamiento/comportamiento.component"; 
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AdminPrimarioComponent,
        CarterasComponent,
        ListCarteraComponent,
        DetailCarteraComponent,
        ComportamientoComponent
    ],
    imports:[
        MaterialModule,
        MatTabsModule,
        FormsModule,
        CommonModule,
        BrowserModule,
        ReactiveFormsModule
    ],
    exports:[
        AdminPrimarioComponent,
        CarterasComponent,
        ListCarteraComponent,
        DetailCarteraComponent,
        ComportamientoComponent
    ]
})
export class PagesModule{}