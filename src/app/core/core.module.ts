import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SharedModule } from '@shared/shared.module';
import { HeaderModule } from './components/header/header.module';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './containers/layout/layout.component';
import { SettingsMenuAppComponent } from './components/settings-menu/settings-menu.component';

@NgModule({
  imports: [
    MatProgressBarModule,
    SharedModule,
    RouterModule,
    MatNativeDateModule,
    HeaderModule,
  ],
  declarations: [
    FooterComponent,
    SidebarComponent,
    LayoutComponent,
    SettingsMenuAppComponent,
  ],
  providers: [],
  exports: [LayoutComponent, FooterComponent, SidebarComponent, SettingsMenuAppComponent],
})
export class CoreModule {}
