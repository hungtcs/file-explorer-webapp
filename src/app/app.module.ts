import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule,
    RoutesModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
})
export class AppModule {

}
