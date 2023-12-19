import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-docs',
  templateUrl: './card-docs.component.html',
  styleUrls: ['./card-docs.component.scss']
})
export class CardDocsComponent implements OnInit {
  variation1DemoCard!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoCard = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo1/card-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo1/card-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/card/card-demo1/card-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}

