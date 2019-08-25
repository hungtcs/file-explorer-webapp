import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawerWrapperComponent } from './components/drawer-wrapper/drawer-wrapper.component';

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
        loadChildren: () => import('./modules/file-explorer/file-explorer.module').then(module => module.FileExplorerModule),
      },
      {
        path: 'downloads',
        data: {
          animation: 'Download',
        },
        loadChildren: () => import('./modules/downloads/downloads.module').then(module => module.DownloadsModule),
      },
      {
        path: 'recycle-bin',
        data: {
          animation: 'RecycleBin',
        },
        loadChildren: () => import('./modules/recycle-bin/recycle-bin.module').then(module => module.RecycleBinModule),
      }
    ],
  },
  {
    path: 'passport',
    data: {
      animation: 'Passport',
    },
    loadChildren: () => import('./modules/passport/passport.module').then(module => module.PassportModule),
  },
  {
    path: 'settings',
    data: {
      animation: 'Settings',
    },
    loadChildren: () => import('./modules/settings/settings.module').then(module => module.SettingsModule),
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
