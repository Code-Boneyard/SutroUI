import { RecipesComponent } from './sessions/recipes/recipes.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sessions/home/home.component';
import { NotFoundComponent } from './sessions/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
  },
  {
    path: 'design',
    loadChildren: () => import('./design/design.module').then(m => m.DesignModule),
  },
  {
    path: 'releases',
    loadChildren: () => import('./releases/releases.module').then(m => m.ReleasesModule),
  },
  {
    path: 'components',
    loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: '**',
    pathMatch: 'full',
    component: NotFoundComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
