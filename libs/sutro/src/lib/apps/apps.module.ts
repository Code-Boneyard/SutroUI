import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { TasksModule } from './tasks/tasks.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FavoritesModule } from './favorites/favorites.module';
import { UserCrudModule } from './user-crud/user-crud.module';
import { LandingModule } from './landing/landing.module';
import { DocsModule } from './docs/docs.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    TasksModule,
    NotificationsModule,
    FavoritesModule,
    UserCrudModule,
    LandingModule,
    DocsModule
  ]
})
export class AppsModule { }
