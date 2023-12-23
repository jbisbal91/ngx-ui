import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-badge-docs',
  templateUrl: './badge-docs.component.html',
  styleUrls: ['./badge-docs.component.scss'],
})
export class BadgeDocsComponent implements OnInit {
  variation1DemoBadge!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoBadge = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo1/badge-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo1/badge-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/badge/badge-demo1/badge-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
