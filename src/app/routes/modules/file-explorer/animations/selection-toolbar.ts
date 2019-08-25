import { trigger, style, state, transition, animate } from '@angular/animations';

export const selectionToolbarAnimation = trigger('selectionToolbar', [
  state('true', style({
    top: '0px',
    width: '100%',
    position: 'absolute',
  })),
  state('false', style({
    top: '-56px',
    width: '100%',
    position: 'absolute',
  })),
  transition('false <=> true', [
    animate('200ms'),
  ]),
]);
