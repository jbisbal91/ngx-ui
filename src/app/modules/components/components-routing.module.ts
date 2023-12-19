import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';
import { CardDocsComponent } from './components/docs/card-docs/card-docs.component';

const routes: Routes = [
  {
    path: 'basic',
    children: [
      {
        path: '',
        component: ComponentsComponent,
        children: [
          { path: 'categories', component: CategoriesComponent },
          { path: 'card', component: CardDocsComponent },
          { path: 'button', component: ButtonDocsComponent },
          { path: 'divider', component: DividerDocsComponent },
          { path: 'expansion', component: AccordionDocsComponent },
          { path: 'tabs', component: TabDocsComponent },
          { path: '**', redirectTo: 'categories', pathMatch: 'full' },
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
