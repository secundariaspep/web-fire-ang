import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { Observable } from 'rxjs';

import { Email, User } from '@core/models';
import { routes } from '@core/config';
import { AuthService } from '@auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() isMenuOpened: boolean;
  @Output() isShowSidebar = new EventEmitter<boolean>();
  public user$: Observable<User> = this.userService.afAuth.user;
  public emails$: Observable<Email[]>;
  public routers: typeof routes = routes;

  constructor(
    private userService: AuthService,
    // private emailService: EmailService,
    private router: Router,
    private ngZone: NgZone
  ) {
    // this.emails$ = this.emailService.loadEmails();
  }

  public openMenu(): void {
    this.isMenuOpened = !this.isMenuOpened;

    this.isShowSidebar.emit(this.isMenuOpened);
  }

  public signOut(): void {
    this.userService.logout();

    this.router.navigate([this.routers.LOGIN]);
  }
}
