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

@NgModule({
  declarations: [
    HeaderComponent,
    UserComponent,
    // EmailComponent,
    NotificationsComponent,
    SearchComponent,
    ShortNamePipe,
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class HeaderModule {}
