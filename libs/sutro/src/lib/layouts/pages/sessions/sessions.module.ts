import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NotFoundModule } from './not-found/not-found.module';
import { VerifyPhoneModule } from './verify-phone/verify-phone.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    NotFoundModule,
    VerifyPhoneModule,
    
  ]
})
export class SessionsModule { }
