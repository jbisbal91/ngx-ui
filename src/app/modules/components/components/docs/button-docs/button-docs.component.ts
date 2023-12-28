import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tabs } from '../../interfaces/tabs.interface';

@Component({
  selector: 'app-button-docs',
  templateUrl: './button-docs.component.html',
  styleUrls: ['./button-docs.component.scss'],
})
export class ButtonDocsComponent implements OnInit {
  moduleImport = "import { ButtonModule } from 'ngx-ui-jbisbal/button';";
  variation1DemoTabs!: Tabs[];
  variation2DemoTabs!: Tabs[];
  variation3DemoTabs!: Tabs[];
  variation4DemoTabs!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo1/button-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo1/button-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo1/button-demo1.component.scss',
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
            'assets/demos/buttons/button-demo2/button-demo2.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo2/button-demo2.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo2/button-demo2.component.scss',
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
            'assets/demos/buttons/button-demo3/button-demo3.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo3/button-demo3.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo3/button-demo3.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
    this.variation4DemoTabs = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo4/button-demo4.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo4/button-demo4.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/buttons/button-demo4/button-demo4.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
