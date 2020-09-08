
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagementDashboardComponent } from './management-dashboard/management-dashboard.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { SessionsLayoutComponent } from './sessions-layout/sessions-layout.component';
import { ModalLayoutComponent } from './modal-layout/modal-layout.component';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  declarations: [ManagementDashboardComponent, 
    PageLayoutComponent, SessionsLayoutComponent, ModalLayoutComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class LayoutsModule { }
