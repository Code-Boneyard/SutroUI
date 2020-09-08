import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenusModule } from '../components/nav/menus/menus.module';
import { RipplesComponent } from './ripples/ripples.component';



@NgModule({
  declarations: [RipplesComponent],
  imports: [
    CommonModule,
    MenusModule
  ]
})
export class AnimationsModule { }
