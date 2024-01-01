import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab-docs',
  templateUrl: './tab-docs.component.html',
  styleUrls: ['./tab-docs.component.scss'],
})
export class TabDocsComponent implements OnInit {
  moduleImport = "import { TabModule } from 'ngx-ui-jbisbal/tab';";
  variation1DemoTabs!: Tabs[];
  variation2DemoTabs!: Tabs[];
  variation3DemoTabs!: Tabs[];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo1/tab-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo1/tab-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo1/tab-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation2DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo2/tab-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo2/tab-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo2/tab-demo2.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation3DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo3/tab-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo3/tab-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tabs/tab-demo3/tab-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
