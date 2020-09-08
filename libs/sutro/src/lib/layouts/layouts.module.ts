
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { GridsModule } from './grids/grids.module';


@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
    GridsModule
  ]
})
export class LayoutsModule { }
