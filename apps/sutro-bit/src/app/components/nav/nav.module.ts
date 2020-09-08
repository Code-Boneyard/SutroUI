import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { SharedModule } from '../../shared/shared.module';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    FooterComponent, 
    BreadcrumbComponent, IconMenuComponent, ToolbarComponent, SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class NavModule { }
