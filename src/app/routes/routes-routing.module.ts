import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawerWrapperComponent } from './drawer-wrapper/drawer-wrapper.component';

const routes: Routes = [
  {
    path: '',
    data: {
      animation: 'DrawerWrapper',
    },
    component: DrawerWrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'explorer',
      },
      {
        path: 'explorer',
        data: {
          animation: 'Explorer',
        },
        loadChildren: () => import('./file-explorer/file-explorer.module').then(module => module.FileExplorerModule),
      },
      {
        path: 'downloads',
        data: {
          animation: 'Download',
        },
        loadChildren: () => import('./downloads/downloads.module').then(module => module.DownloadsModule),
      },
    ],
  },
  {
    path: 'passport',
    data: {
      animation: 'Passport',
    },
    loadChildren: () => import('./passport/passport.module').then(module => module.PassportModule),
  },
  {
    path: 'settings',
    data: {
      animation: 'Settings',
    },
    loadChildren: () => import('./settings/settings.module').then(module => module.SettingsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class RoutesRoutingModule {

}
