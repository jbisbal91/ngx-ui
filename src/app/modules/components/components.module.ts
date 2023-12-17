import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { ComponentsRoutingModule } from './components-routing.module';
import { ButtonModule, DividerModule, ExpansionPanelModule } from 'ngx-ui-components';

import { ComponentsComponent } from './components.component';
import { ComponentNavComponent } from './components/component-nav/component-nav.component';
import { ComponentViewerComponent } from './components/component-viewer/component-viewer.component';
import { GuidesComponent } from './components/guides/guides.component';
import { AccordionDocsComponent } from './components/docs/accordion-docs/accordion-docs.component';
import { AccordionDemo1Component } from './components/demos/accordion/accordion-demo1/accordion-demo1.component';
import { ButtonDocsComponent } from './components/docs/button-docs/button-docs.component';
import { ButtonDemo1Component } from './components/demos/button/button-demo1/button-demo1.component';
import { ButtonDemo2Component } from './components/demos/button/button-demo2/button-demo2.component';
import { ButtonDemo3Component } from './components/demos/button/button-demo3/button-demo3.component';
import { ButtonDemo4Component } from './components/demos/button/button-demo4/button-demo4.component';

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
  GuidesComponent,
  AccordionDocsComponent,
  AccordionDemo1Component,
  ButtonDocsComponent,
  ButtonDemo1Component,
  ButtonDemo2Component,
  ButtonDemo3Component,
  ButtonDemo4Component,
];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [
    CommonModule,
    HttpClientModule,
    HighlightModule,
    ComponentsRoutingModule,
    ButtonModule,
    ExpansionPanelModule,
    DividerModule,
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
