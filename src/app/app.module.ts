import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AlertModule } from 'ngx-bootstrap';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { LoginService } from './login/login.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Passo1Component } from './passo-1/passo-1.component';
import { Passo2Component } from './passo-2/passo-2.component';
import { Passo3Component } from './passo-3/passo-3.component';

@NgModule({
  declarations: [
  AppComponent,
  LoginComponent,
  HomeComponent,
  Passo1Component,
  Passo2Component,
  Passo3Component
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  routing,
  AlertModule.forRoot(),
  AngularFireAuthModule,
  AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
