import { trigger, style, state, transition, animate } from '@angular/animations';

export const bottomAppBarAnimations = trigger('bottomAppBar', [
  state('true', style({
    'transform': 'translateY(0%)',
  })),
  state('false', style({
    'transform': 'translateY(100%)',
  })),
  transition('*<=>*', [
    animate('200ms'),
  ]),
]);
