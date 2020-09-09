import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { LayoutsModule } from './layouts/layouts.module';
import { PageLayoutComponent } from './layouts/page-layout/page-layout.component';
import { PageLayoutModule } from './layouts/page-layout/page-layout.module';

@NgModule({
  imports: [
    CommonModule, 
    
  ],
  declarations: [PageLayoutComponent],
  exports: [PageLayoutModule]
})
export class SutroModule {}
