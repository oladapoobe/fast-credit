import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  {
    path: 'error',
    loadChildren: () =>
      import('./pages/error-pages/error-pages.module').then(
        (m) => m.ErrorPagesModule
      ),
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },

  // WRONG URL REDIRECT TO 404
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: 'error' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
