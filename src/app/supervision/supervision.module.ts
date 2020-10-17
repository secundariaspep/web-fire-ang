import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupervisionRoutingModule } from './supervision.routing';
import { SocioeducModule } from './socioeduc/socioeduc.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SupervisionRoutingModule,
    SocioeducModule
  ]
})
export class SupervisionModule { }
