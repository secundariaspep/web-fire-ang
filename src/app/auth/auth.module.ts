import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from '@auth/auth.routing';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { LoginComponent } from '@auth/containers/login/login.component';
import { RegisterComponent } from '@auth/containers/register/register.component';
import { ForgotPasswordComponent } from '@auth/containers/forgot-password/forgot-password.component';
import { LoginFormComponent, SignupFormComponent } from './components';
import { AuthComponent } from './containers/auth/auth.component';

import { AuthService } from './services/auth.service';
import { AuthGuard, CanAdminGuard, CanEditGuard, CanSuscriptorGuard } from './guards';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    LoginFormComponent,
    SignupFormComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    SharedModule,
  ],
  providers: [AuthService, AuthGuard, CanAdminGuard, CanEditGuard, CanSuscriptorGuard],
})
export class AuthModule {}
