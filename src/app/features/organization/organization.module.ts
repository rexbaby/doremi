import { OrganizationComponent } from './organization.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionDialogComponent } from './region-dialog/region-dialog.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { ORGANIZATION_ROUTE } from './organization.route';
import { RouterModule } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { AgentDialogComponent } from './agent-dialog/agent-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(ORGANIZATION_ROUTE),
  ],
  declarations: [
    OrganizationComponent,
    RegionsComponent,
    RegionDialogComponent,
    AgentListComponent,
    AgentDialogComponent,
  ]
})
export class OrganizationModule { }
