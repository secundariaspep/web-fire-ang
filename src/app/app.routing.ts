import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CanAdminGuard } from '@auth/guards/can-admin.guard';
import { CanSuscriptorGuard } from '@auth/guards/can-suscriptor.guard';
import { CanEditGuard } from '@auth/guards/can-edit.guard';

import { AuthComponent } from './auth/containers/auth/auth.component';
import { SendEmailComponent } from '@auth/containers/send-email/send-email.component';
import { NotFoundComponent } from '@shared/components/not-found/not-found.component';
import { AuthGuard } from './auth/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/auth/login',
    pathMatch: 'full',
  },
  {
    path: 'home',
   // canActivate: [AuthGuard],
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'verification-email',
    component: SendEmailComponent,
  },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  //   canActivate: [CanAdminGuard],
  // },
  // {
  //   path: 'editor',
  //   loadChildren: () =>
  //     import('./editor/editor.module').then((m) => m.EditorModule),
  //   canActivate: [CanEditGuard],
  // },
  // {
  //   path: 'suscriptor',
  //   loadChildren: () =>
  //     import('./suscriptor/suscriptor.module').then((m) => m.SuscriptorModule),
  //   canActivate: [CanSuscriptorGuard],
  // },
  // {
  //   path: 'upload-image',
  //   loadChildren: () =>
  //     import('./shared/upload-image/upload-image.module').then(
  //       (m) => m.UploadImageModule
  //     ),
  //   canActivate: [CanAdminGuard],
  // },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
