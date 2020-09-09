import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatDivider, MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatDividerModule
  ],
  exports: [
    PageLayoutComponent
  ]
})
export class PageLayoutModule { }
