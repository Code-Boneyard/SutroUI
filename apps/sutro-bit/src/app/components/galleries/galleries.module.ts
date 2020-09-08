import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from './carousel/carousel.module';
import { LightboxModule } from './lightbox/lightbox.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    LightboxModule
  ]
})
export class GalleriesModule { }
