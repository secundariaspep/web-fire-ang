import { Component } from '@angular/core';
import { Observable } from 'rxjs';

// import { HomeService } from '../../services';
// import {
//   DailyLineChartData,
//   PerformanceChartData,
//   ProjectStatData,
//   RevenueChartData,
//   ServerChartData,
//   SupportRequestData,
//   VisitsChartData
// } from '../../models';
import {CoreService} from '@core/services/core.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  // public dailyLineChartData$: Observable<DailyLineChartData>;
  // public performanceChartData$: Observable<PerformanceChartData>;
  // public revenueChartData$: Observable<RevenueChartData>;
  // public serverChartData$: Observable<ServerChartData>;
  // public supportRequestData$: Observable<SupportRequestData[]>;
  // public visitsChartData$: Observable<VisitsChartData>;
  // public projectsStatsData$: Observable<ProjectStatData>;
  public todayDate: Date = new Date();
  public currentTheme: string = '';
  public currentMode: string = '';

  constructor(
    // private service: HomeService,
    private coreService: CoreService
  ) {
    // this.dailyLineChartData$ = this.service.loadDailyLineChartData();
    // this.performanceChartData$ = this.service.loadPerformanceChartData();
    // this.revenueChartData$ = this.service.loadRevenueChartData();
    // this.serverChartData$ = this.service.loadServerChartData();
    // this.supportRequestData$ = this.service.loadSupportRequestData();
    // this.visitsChartData$ = this.service.loadVisitsChartData();
    // this.projectsStatsData$ = this.service.loadProjectsStatsData();
  }

  public ngOnInit(): void {
    this.coreService.currentTheme.subscribe((theme: string) => {
      this.currentTheme = theme;
    });

    this.coreService.currentMode.subscribe((mode: string) => {
      this.currentMode= mode;
    });
  }
}
