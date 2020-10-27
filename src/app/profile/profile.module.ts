import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { ProfileComponent } from './containers/profile/profile.component';
import { ProfileRoutingModule } from './profile.routing';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
