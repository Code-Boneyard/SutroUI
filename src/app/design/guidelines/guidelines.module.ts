import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { GuidelinesComponent } from './pages/guidelines/guidelines.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [GuidelinesComponent],
  imports: [
    CommonModule,
    SharedModule,
    GuidelinesRoutingModule
  ]
})
export class GuidelinesModule { }
