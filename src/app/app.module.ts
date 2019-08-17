import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RoutesModule } from './routes/routes.module';
import { ThemesModule } from './shared/public_api';
import { JWTTokenInterceptor } from './intercepts/jwt-token.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    RouterModule,
    RoutesModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ThemesModule.forRoot({
      default: 'energetic',
      colorMatchings: {
        light: {
          primary: '#FFFFFF',
          reverse: 'rgb(98, 0, 238)',
        },
        energetic: {
          primary: 'rgb(98, 0, 238)',
          reverse: '#FFFFFF',
        },
      },
    }),
  ],
  providers: [
    {
      multi: true,
      provide: HTTP_INTERCEPTORS,
      useClass: JWTTokenInterceptor,
    },
  ],
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
})
export class AppModule {

}
