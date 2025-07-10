import { Routes } from '@angular/router';

import { NotFound } from './domains/info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./domains/products/pages/list/list'),
      },
      {
        path: 'about',
        loadComponent: () => import('./domains/info/pages/about/about'),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import('./domains/products/pages/product-detail/product-detail'),
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
