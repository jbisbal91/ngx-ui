import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-switch-docs',
  templateUrl: './switch-docs.component.html',
  styleUrls: ['./switch-docs.component.scss'],
})
export class SwitchDocsComponent implements OnInit {
  variation1DemoSwitch!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoSwitch = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo1/switch-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo1/switch-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/switch/switch-demo1/switch-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
