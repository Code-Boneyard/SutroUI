import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisedButtonComponent } from './raised-button/raised-button.component';
import { OutlineButtonComponent } from './outline-button/outline-button.component';
import { FlatButtonComponent } from './flat-button/flat-button.component';



@NgModule({
  declarations: [RaisedButtonComponent, OutlineButtonComponent, FlatButtonComponent],
  imports: [
    CommonModule
  ]
})
export class InteractionsModule { }
