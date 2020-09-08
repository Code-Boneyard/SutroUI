import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { IconsModule } from './icons/icons.module';
import { AnimationsModule } from './animations/animations.module';
import { StylesModule } from './styles/styles.module';
import { LayoutsModule } from './layouts/layouts.module';

@NgModule({
  imports: [
    CommonModule, 
    ComponentsModule, 
    IconsModule, 
    AnimationsModule, 
    StylesModule, LayoutsModule
  ],
})
export class SutroModule {}
