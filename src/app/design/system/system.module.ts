import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './pages/system/system.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SystemComponent],
  imports: [
    CommonModule,
    SharedModule,
    SystemRoutingModule
  ]
})
export class SystemModule { }
