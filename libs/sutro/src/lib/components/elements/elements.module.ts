import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { CtaComponent } from './cta/cta.component';
import { SharedModule } from '../../shared/shared.module';
import { HeroComponent } from './hero/hero.component';
import { FeaturesComponent } from './features/features.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  declarations: [
    BannerComponent,
    CtaComponent,
    HeroComponent,
    FeaturesComponent,
    ContactSectionComponent,
    FeedComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ElementsModule { }
