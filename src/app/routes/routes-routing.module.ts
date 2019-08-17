import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'explorer',
  },
  {
    path: 'passport',
    loadChildren: () => import('./passport/passport.module').then(module => module.PassportModule),
  },
  {
    path: 'explorer',
    loadChildren: () => import('./file-explorer/file-explorer.module').then(module => module.FileExplorerModule),
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
