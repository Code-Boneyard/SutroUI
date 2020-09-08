import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [BarChartComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CategoriesModule { }
