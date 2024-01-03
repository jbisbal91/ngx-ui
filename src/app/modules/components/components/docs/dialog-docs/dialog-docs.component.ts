import { Component, OnInit, Renderer2 } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dialog-docs',
  templateUrl: './dialog-docs.component.html',
  styleUrls: ['./dialog-docs.component.scss'],
})
export class DialogDocsComponent implements OnInit {
  moduleImport = "import { NgxDialog } from 'ngx-ui-jbisbal/dialog';";
  variation1DemoDialog!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoDialog = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo1/dialog-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo1/dialog-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/dialog/dialog-demo1/dialog-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];

  
  }
}
