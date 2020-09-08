import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SpinnerComponent } from './spinner/spinner.component';



@NgModule({
  declarations: [BadgeComponent, BottomSheetComponent, AutoCompleteComponent, ProgressBarComponent, SpinnerComponent],
  imports: [
    CommonModule
  ]
})
export class BehaviorsModule { }
