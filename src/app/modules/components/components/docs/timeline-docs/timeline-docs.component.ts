import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-timeline-docs',
  templateUrl: './timeline-docs.component.html',
  styleUrls: ['./timeline-docs.component.scss'],
})
export class TimelineDocsComponent implements OnInit {
  moduleImport = "import { TimelineModule } from 'ngx-ui-jbisbal/timeline';";
  variation1DemoTimelines!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoTimelines = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo1/timeline-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo1/timeline-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/timeline/timeline-demo1/timeline-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
