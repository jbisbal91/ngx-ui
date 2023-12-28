import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tag-docs',
  templateUrl: './tag-docs.component.html',
  styleUrls: ['./tag-docs.component.scss'],
})
export class TagDocsComponent implements OnInit {
  moduleImport = "import { TagModule } from 'ngx-ui-jbisbal/tag';";
  variation1DemoTags!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTags = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo1/tag-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo1/tag-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/tag/tag-demo1/tag-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
