import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { SessionsLayoutComponent } from './sessions-layout/sessions-layout.component';



@NgModule({
  declarations: [ManagementDashboardComponent, PageLayoutComponent, SessionsLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class LayoutsModule { }
