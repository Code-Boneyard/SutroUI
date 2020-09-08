import { BrowserModule } from '@angular/platform-browser';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsModule } from './docs/docs.module';
import { DesignModule } from './design/design.module';
import { ReleasesModule } from './releases/releases.module';
import { SessionsModule } from './sessions/sessions.module';
import { FooterComponent } from './shared/nav/footer/footer.component';
import { SystemModule } from './design/system/system.module';
import { FoundationModule } from './design/foundation/foundation.module';
import { GuidelinesModule } from './design/guidelines/guidelines.module';
import { ComponentsModule } from './components/components.module';
import { RecipesModule } from './recipes/recipes.module';
import { PlanningModule } from './design/planning/planning.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DocsModule,
    DesignModule,
    ReleasesModule,
    SessionsModule,
    SystemModule,
    FoundationModule,
    GuidelinesModule,
    ComponentsModule,
    RecipesModule,
    PlanningModule,
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
