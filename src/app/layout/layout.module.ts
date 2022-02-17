import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { DashboardComponent } from "./dashboard/dashboard.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { HomeComponent } from "./home/home.component";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { MaterialModule } from "../material.modules";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent,
        SidenavComponent
    ],
    imports:[       
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[
        SidenavComponent,
        DashboardComponent,
        FooterComponent,
        HeaderComponent,
        HomeComponent        
    ]
})
export class LayoutModule{}