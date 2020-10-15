import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './containers/login/login.component';
import { RegisterComponent } from './containers/register/register.component';
import { ForgotPasswordComponent } from './containers/forgot-password/forgot-password.component';
import { AuthComponent } from './containers/auth/auth.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'login2', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'recover', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
