import { Routes } from '@angular/router';

import { List } from './domains/products/pages/list/list'
import { About } from './domains/info/pages/about/about';
import { NotFound } from './domains/info/pages/not-found/not-found';
import { Layout } from '@shared/components/layout/layout';
import { ProductDetail } from '@products/pages/product-detail/product-detail';

export const routes: Routes = [
    {
        path: '',
        component: Layout,
        children: [
            {
                path: '',
                component: List,
            },
            {
                path: 'about',
                component: About,
            },
            {
                path: 'product/:id',
                component: ProductDetail
            }
        ]
    },
    {
        path: '**',
        component: NotFound,
    }
];
