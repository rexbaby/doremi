import { Route } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

export const SIDEBAR_ROUTE: Route = {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar',
};
