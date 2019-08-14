import { Themes } from './themes';
import { CommonModule } from '@angular/common';
import { ThemeDirective } from './theme.directive';
import { NgModule, ModuleWithProviders } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ThemeDirective,
  ],
  declarations: [
    ThemeDirective,
  ],
})
export class ThemesModule {

  public static forRoot(themes: Themes): ModuleWithProviders {
    return {
      ngModule: ThemesModule,
      providers: [
        {
          provide: Themes,
          useValue: themes,
        },
      ],
    };
  }

}
