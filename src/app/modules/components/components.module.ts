import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { ComponentsRoutingModule } from './components-routing.module';

import { BadgeModule } from 'ngx-ui-jbisbal/badge';
import { ButtonModule } from 'ngx-ui-jbisbal/button';
import { CardModule } from 'ngx-ui-jbisbal/card';
import { CarouselModule } from 'ngx-ui-jbisbal/carousel';
import { DividerModule } from 'ngx-ui-jbisbal/divider';
import { ExpansionPanelModule } from 'ngx-ui-jbisbal/expansion-panel';
import { SwitchModule } from 'ngx-ui-jbisbal/switch';
import { TabModule } from 'ngx-ui-jbisbal/tab';
import { TagModule } from 'ngx-ui-jbisbal/tag';
import { GridModule } from 'ngx-ui-jbisbal/grid';

import { ComponentsComponent } from './components.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { AccordionDemo1Component } from './components/demos/accordion/accordion-demo1/accordion-demo1.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { ButtonDemo1Component } from './components/demos/button/button-demo1/button-demo1.component';
import { ButtonDemo2Component } from './components/demos/button/button-demo2/button-demo2.component';
import { ButtonDemo3Component } from './components/demos/button/button-demo3/button-demo3.component';
import { ButtonDemo4Component } from './components/demos/button/button-demo4/button-demo4.component';
import { DividerDocsComponent } from './components/docs/divider-docs/divider-docs.component';
import { DividerDemo1Component } from './components/demos/divider/divider-demo1/divider-demo1.component';
import { TabDocsComponent } from './components/docs/tab-docs/tab-docs.component';
import { TabDemo1Component } from './components/demos/tabs/tab-demo1/tab-demo1.component';
import { TabDemo2Component } from './components/demos/tabs/tab-demo2/tab-demo2.component';
import { TabDemo3Component } from './components/demos/tabs/tab-demo3/tab-demo3.component';
import { CardDocsComponent } from './components/docs/card-docs/card-docs.component';
import { CardDemo1Component } from './components/demos/card/card-demo1/card-demo1.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselDocsComponent } from './components/docs/carousel-docs/carousel-docs.component';
import { CarouselDemo1Component } from './components/demos/carousel/carousel-demo1/carousel-demo1.component';
import { BadgeDemo1Component } from './components/demos/badge/badge-demo1/badge-demo1.component';
import { BadgeDocsComponent } from './components/docs/badge-docs/badge-docs.component';
import { TagDemo1Component } from './components/demos/tag/tag-demo1/tag-demo1.component';
import { TagDocsComponent } from './components/docs/tag-docs/tag-docs.component';
import { SwitchDocsComponent } from './components/docs/switch-docs/switch-docs.component';
import { SwitchDemo1Component } from './components/demos/switch/switch-demo1/switch-demo1.component';
import { GridDocsComponent } from './components/docs/grid-docs/grid-docs.component';
import { GridDemo1Component } from './components/demos/grid/grid-demo1/grid-demo1.component';
import { GridDemo2Component } from './components/demos/grid/grid-demo2/grid-demo2.component';
import { GridDemo3Component } from './components/demos/grid/grid-demo3/grid-demo3.component';
import { GridDemo4Component } from './components/demos/grid/grid-demo4/grid-demo4.component';
import { DialogDemo1Component } from './components/demos/dialog/dialog-demo1/dialog-demo1.component';
import { DialogRef1Component } from './components/demos/dialog/dialog-ref1/dialog-ref1.component';
import { DialogDocsComponent } from './components/docs/dialog-docs/dialog-docs.component';


export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

const components = [
  ComponentsComponent,
  ComponentNavComponent,
  ComponentViewerComponent,
  CategoriesComponent,
  AccordionDocsComponent,
  AccordionDemo1Component,
  ButtonDocsComponent,
  ButtonDemo1Component,
  ButtonDemo2Component,
  ButtonDemo3Component,
  ButtonDemo4Component,
  DividerDocsComponent,
  DividerDemo1Component,
  TabDocsComponent,
  TabDemo1Component,
  TabDemo2Component,
  TabDemo3Component,
  CardDocsComponent,
  CardDemo1Component,
  CarouselDocsComponent,
  CarouselDemo1Component,
  DialogDocsComponent,
  DialogDemo1Component,
  DialogRef1Component,
  BadgeDocsComponent,
  BadgeDemo1Component,
  TagDocsComponent,
  TagDemo1Component,
  SwitchDocsComponent,
  SwitchDemo1Component,
  GridDocsComponent,
  GridDemo1Component,
  GridDemo2Component,
  GridDemo3Component,
  GridDemo4Component,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    HighlightModule,
    ComponentsRoutingModule,
    ButtonModule,
    ExpansionPanelModule,
    DividerModule,
    GridModule,
    TabModule,
    CardModule,
    CarouselModule,
    BadgeModule,
    TagModule,
    SwitchModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: {
          xml: () => import('highlight.js/lib/languages/xml'),
          typescript: () => import('highlight.js/lib/languages/typescript'),
          scss: () => import('highlight.js/lib/languages/scss'),
        },
      },
    },
  ],
})
export class ComponentsModule {}
