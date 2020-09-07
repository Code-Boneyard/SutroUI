import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoundationRoutingModule } from './foundation-routing.module';
import { FoundationsComponent } from './pages/foundations/foundations.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [FoundationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    FoundationRoutingModule
  ]
})
export class FoundationModule { }
