import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Passo1Component } from './passo-1/passo-1.component';
import { Passo2Component } from './passo-2/passo-2.component';
import { Passo3Component } from './passo-3/passo-3.component';
import { MembersComponent } from './members/members.component';

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'passo-1', component: Passo1Component, canActivate: [ AuthGuard ] },
  { path: 'passo-2', component: Passo2Component, canActivate: [ AuthGuard ] },
  { path: 'passo-3', component: Passo3Component, canActivate: [ AuthGuard ] },
  { path: 'member/:id', component: MembersComponent, canActivate: [ AuthGuard ] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
