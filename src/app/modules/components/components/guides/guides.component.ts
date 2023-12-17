import { Component, OnInit } from '@angular/core';
import { Tabs } from '../interfaces/tabs.interface';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss'],
})
export class GuidesComponent implements OnInit {
  constructor() {}

  demoConfig!: Tabs[];

  moduleImport = `
      import { NgModule } from '@angular/core';
      import { BrowserModule } from '@angular/platform-browser';

      import { AppRoutingModule } from './app-routing.module';
      import { AppComponent } from './app.component';

      import {TabModule} from 'ngx-ui-components';


      @NgModule({
        declarations: [
          AppComponent
        ],
        imports: [
          BrowserModule,
          AppRoutingModule,
          TabModule
        ],
        bootstrap: [ AppComponent ],
        providers   : []
      })
      export class AppModule { }
  `;

  stylesImport = `
      {
        "assets": [
          {
            "src/favicon.ico",
            "src/assets"
          }
        ],
        "styles": [
            "src/styles.scss",
            "node_modules/ngx-ui-lib/src/lib/assets/styles/main.scss"
          ]
      }
  `;

  ngOnInit() {
    this.demoConfig = [
      {
        tabTitle: 'HTML',
        tabContent: {
          code: EMPTY,
        },
      },
      {
        tabTitle: 'TS',
        tabContent: {
          code: EMPTY,
        },
      },
      {
        tabTitle: 'SCSS',
        tabContent: {
          code: EMPTY,
        },
      },
    ];
  }
}
