import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SessionsModule } from './sessions/sessions.module';
import { ProfileComponent } from './profile/profile.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';
import { PageLayoutModule } from './page-layout/page-layout.module';



@NgModule({
  declarations: [ProfileComponent, PageLayoutComponent],
  imports: [
    CommonModule,
    SessionsModule,
    PageLayoutModule
  ]
})
export class PagesModule { }
