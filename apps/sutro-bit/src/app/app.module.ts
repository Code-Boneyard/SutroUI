import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';

import { LayoutsModule } from './layouts/layouts.module';
import { IconsModule } from './icons/icons.module';
import { ComponentsModule } from './components/components.module';
import { BehaviorsModule } from './behaviors/behaviors.module';
import { ApplicationsModule } from './applications/applications.module';
import { AnimationsModule } from './animations/animations.module';
import { StylesModule } from './styles/styles.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AnimationsModule,
    ApplicationsModule,
    BehaviorsModule,
    ComponentsModule,
    IconsModule,
    LayoutsModule,
    SharedModule,
    StylesModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
