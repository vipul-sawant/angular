import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./list/list.component').then(m => m.ListComponent)
  },
  {
    path: 'entry',
    loadComponent: () => import('./entry/entry.component').then(m => m.EntryComponent)
  },
];
