import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsModule } from './sessions/sessions.module';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    SessionsModule
  ]
})
export class PagesModule { }
