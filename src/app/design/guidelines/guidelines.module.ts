import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { GuidelinesComponent } from './pages/guidelines/guidelines.component';


@NgModule({
  declarations: [GuidelinesComponent],
  imports: [
    CommonModule,
    GuidelinesRoutingModule
  ]
})
export class GuidelinesModule { }
