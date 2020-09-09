import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddItemComponent } from './add-item/add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';



@NgModule({
  declarations: [AddItemComponent, EditItemComponent],
  imports: [
    CommonModule
  ]
})
export class DialogsModule { }
