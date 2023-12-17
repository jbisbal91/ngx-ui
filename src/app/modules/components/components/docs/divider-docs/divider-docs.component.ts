import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-divider-docs',
  templateUrl: './divider-docs.component.html',
  styleUrls: ['./divider-docs.component.scss'],
})
export class DividerDocsComponent implements OnInit {
  variation1DemoDivider!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoDivider = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo1/divider-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo1/divider-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/divider/divider-demo1/divider-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
