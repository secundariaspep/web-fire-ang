import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatTreeModule} from '@angular/material/tree';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { YearPipe } from './pipes';

import { SnackBarComponent } from './components/snackbar/snackbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { DateMenuComponent } from './components/date-menu/date-menu.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot(),
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTreeModule,
    FullCalendarModule,
  ],
  declarations: [SnackBarComponent, AlertComponent, NotFoundComponent, YearPipe, BreadcrumbComponent, DateMenuComponent],
  exports: [
    CommonModule,
    SnackBarComponent,
    AlertComponent,
    NotFoundComponent,
    YearPipe,
    BreadcrumbComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatListModule,
    MatExpansionModule,
    MatTableModule,
    MatDialogModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatTreeModule,
    FullCalendarModule
  ],
  providers: [],
  entryComponents: [SnackBarComponent],
})
export class SharedModule {}
