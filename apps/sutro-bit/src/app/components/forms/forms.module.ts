import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { InputComponent } from './input/input.component';
import { MessageModule } from './message/message.module';



@NgModule({
  declarations: [SelectComponent, InputComponent],
  imports: [
    CommonModule,
    MessageModule
  ]
})
export class FormsModule { }
