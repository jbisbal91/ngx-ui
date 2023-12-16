import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  HighlightModule,
  HIGHLIGHT_OPTIONS,
  HighlightOptions,
} from 'ngx-highlightjs';

import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { AccordionDemo1Component } from './components/demos/accordion/accordion-demo1/accordion-demo1.component';
import { HttpClientModule } from '@angular/common/http';

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
  AccordionDocsComponent,
  AccordionDemo1Component,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentsRoutingModule,
    HighlightModule,
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
