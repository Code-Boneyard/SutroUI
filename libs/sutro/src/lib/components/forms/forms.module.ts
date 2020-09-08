import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [SelectComponent, InputComponent],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
