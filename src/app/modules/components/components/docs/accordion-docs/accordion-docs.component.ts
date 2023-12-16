import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-accordion-docs',
  templateUrl: './accordion-docs.component.html',
  styleUrls: ['./accordion-docs.component.scss'],
})
export class AccordionDocsComponent implements OnInit {
  variation1DemoAccordion!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoAccordion = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo1/accordion-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo1/accordion-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/accordion/accordion-demo1/accordion-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
