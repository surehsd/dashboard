import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './auth/login/login.component';

export const AppRoutes: Routes = [
  // {
  //   path: 'login',
  //   component: LoginComponent}
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
      }
    ]
  }
];
