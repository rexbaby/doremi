import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVBAR_ROUTE } from './layouts/navbar/navbar.route';
import { SIDEBAR_ROUTE } from './layouts/sidebar/sidebar.route';
import { errorRoute } from './layouts/error/error.route';
import { OrganizationComponent } from './features/organization/organization.component';

const LAYOUT_ROUTES = [NAVBAR_ROUTE, SIDEBAR_ROUTE, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: '',
        pathMatch: 'full',
        redirectTo: 'organization',

      },
      {
        path: 'organization',
        component: OrganizationComponent,
        loadChildren: () => 
          import('./features/organization/organization.module')
              .then(m => m.OrganizationModule),
      },
      
      ...LAYOUT_ROUTES,
    ]),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
