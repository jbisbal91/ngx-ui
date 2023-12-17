import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { GuidesComponent } from './components/guides/guides.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      { path: 'guides', component: GuidesComponent },
      { path: 'button', component: ButtonDocsComponent },
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
