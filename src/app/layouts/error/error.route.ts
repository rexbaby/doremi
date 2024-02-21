import { Data, Routes } from '@angular/router';

import { ErrorComponent } from './error.component';

export const errorRoute: Routes = [
    {
        path: 'error',
        component: ErrorComponent,
        data: {
            pageTitle: 'Error page!',
        },
    },
    {
        path: 'accessDenied',
        component: ErrorComponent,
        data: {
            pageTitle: 'Error page!',
            errorMessage: 'You are not authorized to access this page.',
        },
    },
    {
        path: '404',
        component: ErrorComponent,
        data: {
            pageTitle: 'Error page!',
            errorMessage: 'The page does not exist.',
        },
    },
    {
        path: '**',
        redirectTo: '/404',
    },
];

// interface ErrorRouteData extends Data {
//     errorMessage?: string;
// }