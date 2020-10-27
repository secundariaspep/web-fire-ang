import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import {
  UserComponent,
  NotificationsComponent,
  SearchComponent,
} from './components';
import { ShortNamePipe } from './pipes';
import { HeaderComponent } from './containers';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    // EmailComponent,
    NotificationsComponent,
    SearchComponent,
    ShortNamePipe,
  ],
  exports: [HeaderComponent, SearchComponent, ShortNamePipe],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
})
export class HeaderModule {}
