import { NgModule } from "@angular/core";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { MaterialModule } from "../material.modules";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports:[
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule
    ],
    exports:[
        LoginComponent,
        SignupComponent
    ]
})
export class AuthModule{}