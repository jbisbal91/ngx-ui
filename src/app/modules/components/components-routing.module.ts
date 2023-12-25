import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';
import { CardDocsComponent } from './components/docs/card-docs/card-docs.component';
import { CarouselDocsComponent } from './components/docs/carousel-docs/carousel-docs.component';
import { BadgeDocsComponent } from './components/docs/badge-docs/badge-docs.component';
import { TagDocsComponent } from './components/docs/tag-docs/tag-docs.component';

const routes: Routes = [
  {
    path: 'basic',
    children: [
      {
        path: '',
        component: ComponentsComponent,
        children: [
          { path: 'categories', component: CategoriesComponent },
          { path: 'badge', component: BadgeDocsComponent },
          { path: 'carousel', component: CarouselDocsComponent },
          { path: 'card', component: CardDocsComponent },
          { path: 'button', component: ButtonDocsComponent },
          { path: 'divider', component: DividerDocsComponent },
          { path: 'expansion', component: AccordionDocsComponent },
          { path: 'tabs', component: TabDocsComponent },
          { path: 'tags', component: TagDocsComponent },
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
