import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.modules';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { CarterasComponent } from './cat/carteras/carteras.component';
import { HomeComponent } from './layout/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {  GoogleLoginProvider } from 'angularx-social-login';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';
import { carteraInterceptor } from './interceptors/cartera.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    CarterasComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidenavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1061237230787-7io2ufggldm8bauo73849ik303i9ot77.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }, carteraInterceptor
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
