
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    PageLayoutComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule
  ]
})
export class PageLayoutModule { }
