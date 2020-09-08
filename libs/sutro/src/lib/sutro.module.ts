import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { IconsModule } from './icons/icons.module';
import { AnimationsModule } from './animations/animations.module';
import { StylesModule } from './styles/styles.module';
import { LayoutsModule } from './layouts/layouts.module';
import { SharedModule } from './shared/shared.module';
import { BehaviorsModule } from './behaviors/behaviors.module';
import { AppsModule } from './apps/apps.module';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    IconsModule,
    AnimationsModule,
    StylesModule,
    LayoutsModule,
    SharedModule,
    BehaviorsModule,
    AppsModule
  ],
})
export class SutroModule { }
