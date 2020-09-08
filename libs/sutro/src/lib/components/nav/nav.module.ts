import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    FooterComponent, 
    BreadcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NavModule { }
