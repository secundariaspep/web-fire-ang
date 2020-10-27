import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';
import { SharedModule } from '@shared/shared.module';

import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

import { SendEmailComponent } from './auth/containers/send-email/send-email.component';

// import { AuthService } from '@auth/services/auth.service';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
// import { ProfileModule } from './profile/profile.module';
import { SupervisionModule } from './supervision/supervision.module';


// import { CanSuscriptorGuard } from '@app/auth/guards/can-suscriptor.guard';
// import { CanAdminGuard } from '@auth/guards/can-admin.guard';
// import { CanEditGuard } from '@auth/guards/can-edit.guard';

@NgModule({
  declarations: [AppComponent, SendEmailComponent],
  imports: [
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AuthModule,
    HomeModule,
    // ProfileModule,
    SupervisionModule,
  ],
  providers: [
    // AuthService,
    // CanEditGuard,
    // CanAdminGuard,
    // CanSuscriptorGuard,
    { provide: BUCKET, useValue: 'gs://supervisionsecundariaspep.appspot.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
