import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuidelinesComponent } from './pages/guidelines/guidelines.component';

const routes: Routes = [
  {
    path: '',
    component: GuidelinesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule { }
