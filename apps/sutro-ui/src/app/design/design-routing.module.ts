import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'system'
  },
  {
    path: 'foundation',
    loadChildren: () => import('./foundation/foundation.module').then(m => m.FoundationModule),
  },
  {
    path: 'guidelines',
    loadChildren: () => import('./guidelines/guidelines.module').then(m => m.GuidelinesModule),
  },
  {
    path: 'system',
    loadChildren: () => import('./system/system.module').then(m => m.SystemModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
