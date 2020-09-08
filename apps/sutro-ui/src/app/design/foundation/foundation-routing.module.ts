import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoundationsComponent } from './pages/foundations/foundations.component';

const routes: Routes = [
  {
    path: '',
    component: FoundationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoundationRoutingModule { }
