import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from './categories/categories.module';
import { FinancialModule } from './financial/financial.module';
import { ConstructionModule } from './construction/construction.module';
import { ManagementModule } from './management/management.module';
import { TimelinesModule } from './timelines/timelines.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesModule,
    FinancialModule,
    ConstructionModule,
    ManagementModule,
    TimelinesModule
  ]
})
export class ChartsModule { }
