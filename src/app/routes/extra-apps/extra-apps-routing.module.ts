import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExtraAppsComponent } from './extra-apps.component';

const routes: Routes = [
  {
    path: 'extra',
    component: ExtraAppsComponent,
    children: [
      {
        path: 'picture-viewer/:path',
        loadChildren: () => import('./picture-viewer/picture-viewer.module').then(module => module.PictureViewerModule),
      },
      {
        path: 'video-player/:path',
        loadChildren: () => import('./video-player/video-player.module').then(module => module.VideoPlayerModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ExtraAppsRoutingModule {

}
