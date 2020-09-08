import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CostTrendComponent } from './cost-trend/cost-trend.component';



@NgModule({
  declarations: [CostTrendComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ConstructionModule { }
