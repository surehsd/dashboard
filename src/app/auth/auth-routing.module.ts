import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { FullComponent } from "../layouts/full/full.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
    {
    path: 'start',
    component: FullComponent,
    children: [
      {
        path: 'start',
        redirectTo: '/starter',
        pathMatch: 'full'
      },
      {
        path: 'start',
        loadChildren:
          () => import('./../material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: 'starter',
        loadChildren: () => import('./../starter/starter.module').then(m => m.StarterModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
