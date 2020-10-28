import { Component, Input } from '@angular/core';

import { routes } from '@core/config';
import { User } from '@core/models';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {

  @Input() user: User;

  public routes: typeof routes = routes;

}
