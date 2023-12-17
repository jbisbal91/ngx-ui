import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { GuidesComponent } from './components/guides/guides.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: 'guides', component: GuidesComponent },
      { path: 'expansion', component: AccordionDocsComponent },
      { path: '**', redirectTo: 'guides', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
