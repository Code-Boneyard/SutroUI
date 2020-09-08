import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { OutlineButtonComponent } from './outline-button/outline-button.component';



@NgModule({
  declarations: [RaisedButtonComponent, OutlineButtonComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionsModule { }
