import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
// import { TrendModule } from 'ngx-trend';

// import { MatCardModule } from '@angular/material/card';
// import { MatIconModule } from '@angular/material/icon';
// import { MatMenuModule } from '@angular/material/menu';
// import { MatButtonModule } from '@angular/material/button';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { MatSelectModule } from '@angular/material/select';
// import { MatInputModule } from '@angular/material/input';

import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';

import { HomePageComponent } from './containers';
// import {
//   VisitsChartComponent,
//   PerformanceChartComponent,
//   ServerChartComponent,
//   RevenueChartComponent,
//   DailyLineChartComponent,
//   SupportRequestsComponent,
//   ProjectStatChartComponent
// } from './components';
import { SharedModule } from '@shared/shared.module';
import { HomeService } from './services';
// import {MatTabsModule} from '@angular/material/tabs';
// import {MatCheckboxModule} from '@angular/material/checkbox';
// import {MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    HomePageComponent,
    // VisitsChartComponent,
    // PerformanceChartComponent,
    // ServerChartComponent,
    // RevenueChartComponent,
    // DailyLineChartComponent,
    // SupportRequestsComponent,
    // ProjectStatChartComponent
  ],
    imports: [
        CommonModule,
        // MatTableModule,
        NgxEchartsModule,
        // TrendModule,
        // MatCardModule,
        // MatIconModule,
        // MatMenuModule,
        // MatButtonModule,
        // MatProgressBarModule,
        // MatToolbarModule,
        // MatGridListModule,
        // MatSelectModule,
        // MatInputModule,
        NgApexchartsModule,
        FormsModule,
        SharedModule,
        // MatTabsModule,
        // MatCheckboxModule,
        // MatSortModule
    ],
  exports: [
    // DailyLineChartComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
