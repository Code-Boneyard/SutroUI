import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { OutlineButtonComponent } from './outline-button/outline-button.component';
import { FlatButtonComponent } from './flat-button/flat-button.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ChipsComponent } from './chips/chips.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AccordionComponent } from './accordion/accordion.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { StepperComponent } from './stepper/stepper.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SortHeaderComponent } from './sort-header/sort-header.component';
import { TabsComponent } from './tabs/tabs.component';



@NgModule({
  declarations: [RaisedButtonComponent, OutlineButtonComponent, FlatButtonComponent, RadioButtonComponent, CheckboxComponent, ButtonToggleComponent, ChipsComponent, DatePickerComponent, AccordionComponent, PaginatorComponent, StepperComponent, SlideToggleComponent, SortHeaderComponent, TabsComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionsModule { }
