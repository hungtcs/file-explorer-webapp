import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoPlayerRoutingModule } from './video-player-routing.module';
import { PlayerComponent } from './player/player.component';


@NgModule({
  declarations: [PlayerComponent],
  imports: [
    CommonModule,
    VideoPlayerRoutingModule
  ]
})
export class VideoPlayerModule { }
