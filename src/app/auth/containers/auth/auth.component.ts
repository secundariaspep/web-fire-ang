import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@app/core/models';

import { AuthService } from '@auth/services/auth.service';
import { routes } from '@core/config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  public todayDate: Date = new Date();
  public routers: typeof routes = routes;
  public form: any = '';

  constructor(private authSvc: AuthService, private router: Router) {}

  async onGoogleLogin() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendLoginForm(values) {
    const { email, password } = values;
    try {
      const user = await this.authSvc.login(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async sendSignForm(values) {
    const { email, password } = values;
    try {
      const user = await this.authSvc.register(email, password);
      if (user) {
        this.checkUserIsVerified(user);
      }
    } catch (error) {
      console.log(error);
    }
  }

  private checkUserIsVerified(user: User) {
    if (user && user.emailVerified) {
      this.router.navigate(['/home']).then();
    } else if (user) {
      this.router.navigate(['/verification-email']).then();
    } else {
      this.router.navigate(['/register']).then();
    }
  }
}
