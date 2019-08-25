import { trigger, transition, style, query, group, animate } from '@angular/animations';

export const popAnimation = [
  query(':enter, :leave', [
    style({
      width: '100%',
      height: '100%',
      position: 'fixed',
    }),
  ], { optional: true }),
  group([
    query(':leave', [
      style({
        'opacity': 1,
        'z-index': 1000,
        'transform': 'translateY(0)',
      }),
      animate('200ms ease-out', style({
        'opacity': 0,
        'transform': 'translateY(20%)',
      })),
    ], { optional: true }),
    query(':enter', [
      style({
        'z-index': 999,
        'transform': 'translateY(-5%)',
      }),
      animate('200ms ease-out', style({
        'z-index': 999,
        'transform': 'translateY(0)',
      })),
    ], { optional: true }),
  ]),
];

export const pushAnimation = [
  query(':enter, :leave', [
    style({
      width: '100%',
      height: '100%',
      position: 'fixed',
    }),
  ], { optional: true }),
  group([
    query(':enter', [
      style({
        'opacity': 0,
        'z-index': 1000,
        'transform': 'translateY(20%)',
      }),
      animate('200ms ease-out', style({
        'opacity': 1,
        'transform': 'translateY(0)',
      })),
    ], { optional: true }),
    query(':leave', [
      style({
        'opacity': 1,
        'z-index': 999,
        'transform': 'translateY(0)',
      }),
      animate('200ms ease-out', style({
        'opacity': 0.5,
        'transform': 'translateY(0%)',
      })),
    ], { optional: true }),
  ]),
];

export const routesAnimation = trigger('routesAnimation', [
  transition('DrawerWrapper => Settings', pushAnimation),
  transition('Settings => DrawerWrapper', popAnimation),

  transition('DrawerWrapper <=> Passport', pushAnimation),
]);
