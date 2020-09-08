import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesModule } from './categories/categories.module';
import { FinancialModule } from './financial/financial.module';
import { ConstructionModule } from './construction/construction.module';
import { ManagementModule } from './management/management.module';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    CategoriesModule,
    FinancialModule,
    ConstructionModule,
    ManagementModule
  ]
})
export class ChartsModule { }
