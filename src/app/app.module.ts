import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { carteraInterceptor } from './interceptors/cartera.interceptor';

import { AuthModule } from './auth/auth.module';

import { PagesModule } from './pages/pages.module';
import { MaterialModule } from './material.modules';
import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    MaterialModule,
    SocialLoginModule,
    AuthModule,
    LayoutModule,
    PagesModule,    
    CommonModule,
    AppRoutingModule
   
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
