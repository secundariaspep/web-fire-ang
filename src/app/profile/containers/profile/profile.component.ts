import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '@auth/services/auth.service';
import { User } from '@core/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user$: Observable<User> = this.userService.afAuth.user;

  constructor(
    private userService: AuthService,
  ) {  }

  ngOnInit(): void {
  }

}
