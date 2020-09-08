import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipesComponent } from './recipes/recipes.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { LegalComponent } from './legal/legal.component';
import { SharedModule } from '../shared/shared.module';
import { QuickStartComponent } from './quick-start/quick-start.component';


@NgModule({
  declarations: [HomeComponent, NotFoundComponent, RecipesComponent, PrivacyComponent, LegalComponent, QuickStartComponent,],
  imports: [
    CommonModule,
    SessionsRoutingModule,
    SharedModule
  ]
})
export class SessionsModule { }
