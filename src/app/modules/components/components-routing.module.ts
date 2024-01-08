import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { GridDocsComponent } from './components/docs/grid-docs/grid-docs.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';
import { CardDocsComponent } from './components/docs/card-docs/card-docs.component';
import { CarouselDocsComponent } from './components/docs/carousel-docs/carousel-docs.component';
import { BadgeDocsComponent } from './components/docs/badge-docs/badge-docs.component';
import { TagDocsComponent } from './components/docs/tag-docs/tag-docs.component';
import { SwitchDocsComponent } from './components/docs/switch-docs/switch-docs.component';
import { DialogDocsComponent } from './components/docs/dialog-docs/dialog-docs.component';
import { TimelineDocsComponent } from './components/docs/timeline-docs/timeline-docs.component';
import { PieChartDocsComponent } from './components/docs/pie-chart-docs/pie-chart-docs.component';

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
          { path: 'dialog', component: DialogDocsComponent },
          { path: 'button', component: ButtonDocsComponent },
          { path: 'divider', component: DividerDocsComponent },
          { path: 'expansion', component: AccordionDocsComponent },
          { path: 'grid', component: GridDocsComponent },
          { path: 'tabs', component: TabDocsComponent },
          { path: 'tags', component: TagDocsComponent },
          { path: 'timelines', component: TimelineDocsComponent },
          { path: 'switch', component: SwitchDocsComponent },
          { path: 'pie-chart', component: PieChartDocsComponent },
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
