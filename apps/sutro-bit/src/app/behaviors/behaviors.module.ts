import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { DimmerComponent } from './dimmer/dimmer.component';
import { ToastModule } from './toast/toast.module';
import { RevealModule } from './reveal/reveal.module';



@NgModule({
  declarations: [BadgeComponent, BottomSheetComponent, AutoCompleteComponent, ProgressBarComponent, SpinnerComponent, TooltipComponent, DimmerComponent],
  imports: [
    CommonModule,
    ToastModule,
    RevealModule
  ]
})
export class BehaviorsModule { }
