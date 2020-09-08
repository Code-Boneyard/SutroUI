
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { GridsModule } from './grids/grids.module';
import { ContainersModule } from './containers/containers.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
],
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
    GridsModule,
    ContainersModule,
    HeaderModule
  ]
})
export class LayoutsModule { }
