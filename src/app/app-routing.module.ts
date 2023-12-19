import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'overview',
    loadChildren: () =>
      import('./modules/home-page/home-page.module').then(
        (m) => m.HomePageModule
      ),
  },
  {
    path: 'designs',
    loadChildren: () =>
      import('./modules/designs/designs.module').then((m) => m.DesignsModule),
  },
  {
    path: 'components',
    loadChildren: () =>
      import('./modules/components/components.module').then(
        (m) => m.ComponentsModule
      ),
  },
  {
    path: 'templates',
    loadChildren: () =>
      import('./modules/templates/templates.module').then(
        (m) => m.TemplatesModule
      ),
  },
  { path: '**', redirectTo: 'overview', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
