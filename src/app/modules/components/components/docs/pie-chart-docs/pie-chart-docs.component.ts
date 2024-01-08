import { Component, OnInit } from '@angular/core';
import { Tabs } from '../../interfaces/tabs.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pie-chart-docs',
  templateUrl: './pie-chart-docs.component.html',
  styleUrls: ['./pie-chart-docs.component.scss'],
})
export class PieChartDocsComponent implements OnInit {
  moduleImport = "import { PieChartModule } from 'ngx-ui-jbisbal/pie-chart';";
  variation1DemoPieChart!: Tabs[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.variation1DemoPieChart = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: this.http.get(
            'assets/demos/pie-chart/pie-chart-demo1/pie-chart-demo1.component.html',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: this.http.get(
            'assets/demos/pie-chart/pie-chart-demo1/pie-chart-demo1.component.ts',
            { responseType: 'text' }
          ),
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: this.http.get(
            'assets/demos/pie-chart/pie-chart-demo1/pie-chart-demo1.component.scss',
            { responseType: 'text' }
          ),
        },
      },
    ];
  }
}
