import { Route } from "@angular/router";
import { AgentListComponent } from "./agent-list/agent-list.component";
import { OrganizationComponent } from "./organization.component";
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
                path: 'agent-list/:region/:id',
                component: AgentListComponent,
            },
            {
                path: 'agent-list/:region/subordinate/:id-sub',
                component: AgentListComponent,
            },
        ],
    },
];