import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrganizationComponent } from './organization.component';
import { SharedElementUiModule } from 'src/app/shared/shared-element-ui.module';

@NgModule({
  imports: [
    CommonModule,
    SharedElementUiModule
  ],
  declarations: [OrganizationComponent]
})
export class OrganizationModule { }
