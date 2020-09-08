import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { DataTableComponent } from './data-table/data-table.component';



@NgModule({
  declarations: [DataTableComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class TablesModule { }
