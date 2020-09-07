import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocsModule } from './docs/docs.module';
import { DesignModule } from './design/design.module';
import { ReleasesModule } from './releases/releases.module';
import { SessionsModule } from './sessions/sessions.module';
import { FooterComponent } from './shared/nav/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DocsModule,
    DesignModule,
    ReleasesModule,
    SessionsModule
  ],
  providers: [

  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
