import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { HomeRoutingModule } from '@app/home/home.routing';
import { HomeComponent } from '@app/home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, CoreModule, SharedModule],
})
export class HomeModule {}
