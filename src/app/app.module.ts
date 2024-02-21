import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainComponent } from './layouts/main/main.component';
import { SharedMaterialModule } from './shared/shared-material.module';
import { ErrorComponent } from './layouts/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrganizationModule } from './features/organization/organization.module';

@NgModule({
  declarations: [			
    MainComponent,			
    NavbarComponent,
    SidebarComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    OrganizationModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
