import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundationRoutingModule } from './foundation-routing.module';
import { FoundationsComponent } from './pages/foundations/foundations.component';


@NgModule({
  declarations: [FoundationsComponent],
  imports: [
    CommonModule,
    FoundationRoutingModule
  ]
})
export class FoundationModule { }
