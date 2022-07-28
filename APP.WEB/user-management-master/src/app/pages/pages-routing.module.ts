import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// PARENT
import { PagesComponent } from './pages.component';


import { UserListComponent as UserListPage } from './user-list/user-list.component';
const routes: Routes = [
  {
    path: '',

    component: PagesComponent,
    children: [
      {
        path: 'user-list',
        component: UserListPage,
      },
      { path: '', pathMatch: 'full', redirectTo:'user-list'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
