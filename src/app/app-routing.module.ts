import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NAVBAR_ROUTE } from './layouts/navbar/navbar.route';
import { SIDEBAR_ROUTE } from './layouts/sidebar/sidebar.route';
import { errorRoute } from './layouts/error/error.route';
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { OrganizationComponent } from './features/organization/organization.component';

const LAYOUT_ROUTES = [NAVBAR_ROUTE, SIDEBAR_ROUTE, ...errorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { 
        path: '',
          component: OrganizationComponent,
      },
      ...LAYOUT_ROUTES,
    ]),

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
