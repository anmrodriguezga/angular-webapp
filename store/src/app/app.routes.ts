import { Routes } from '@angular/router';

import { List } from './domains/products/pages/list/list'
import { About } from './domains/info/pages/about/about';
import { NotFound } from './domains/info/pages/not-found/not-found';

export const routes: Routes = [
    {
        path: '',
        component: List,
    },
    {
        path: 'about',
        component: About,
    },
    {
        path: '**',
        component: NotFound,
    }
];
