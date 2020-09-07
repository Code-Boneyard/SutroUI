import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { QuickStartComponent } from './quick-start/quick-start.component';


@NgModule({
  declarations: [HomeComponent, NotFoundComponent, QuickStartComponent],
  imports: [
    CommonModule,
    SessionsRoutingModule
  ]
})
export class SessionsModule { }
