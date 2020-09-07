
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
    path: 'sessions',
    loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionsModule),
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
