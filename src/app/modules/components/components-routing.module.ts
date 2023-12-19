import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { GuidesComponent } from './components/guides/guides.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';

const routes: Routes = [
  {
    path: 'basic',
    children: [
      {
        path: '',
        component: ComponentsComponent,
        children: [
          { path: 'guides', component: GuidesComponent },
          { path: 'button', component: ButtonDocsComponent },
          { path: 'divider', component: DividerDocsComponent },
          { path: 'expansion', component: AccordionDocsComponent },
          { path: 'tabs', component: TabDocsComponent },
          { path: '**', redirectTo: 'guides', pathMatch: 'full' },
        ],
      },
    ],
  },
  {
    path: 'advanced',
    component: ComponentsComponent,
  },
  { path: '**', redirectTo: 'basic', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
