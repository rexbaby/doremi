import { OrganizationComponent } from './organization.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegionDialogComponent } from './region-dialog/region-dialog.component';
import { AgentListComponent } from './agent-list/agent-list.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    OrganizationComponent,
    RegionDialogComponent,
    AgentListComponent
  ]
})
export class OrganizationModule { }
