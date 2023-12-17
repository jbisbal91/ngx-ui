import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignsComponent } from './designs.component';

const routes: Routes = [
  {
    path: '',
    component: DesignsComponent,
    children: [
      // { path: '**', redirectTo: 'designs', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DesignsRoutingModule {}
