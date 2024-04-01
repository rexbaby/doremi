import { Route } from "@angular/router";
import { AgentListComponent } from "./agent-list/agent-list.component";
import { OrganizationComponent } from "./organization.component";
import { RegionDeptComponent } from "./region-dept/region-dept.component";
import { RegionsComponent } from "./regions/regions.component";

export const ORGANIZATION_ROUTE: Route[] = [
    {
        path: '',
        component: OrganizationComponent,
        children: [
            {
                path: '',
                component: RegionsComponent,
            },
            {
                path: 'agent-list/:work-unit/:id',
                component: AgentListComponent,
            },
            {
                path: 'agent-list/:work-unit/subordinate/:id-sub',
                component: AgentListComponent,
            },
            {
                path: 'depts/:region/:id',
                component: RegionDeptComponent,
            },
        ],
    },
];