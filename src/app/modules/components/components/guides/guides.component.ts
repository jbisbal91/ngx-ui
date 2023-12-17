import { Component } from '@angular/core';

@Component({
  selector: 'app-guides',
  templateUrl: './guides.component.html',
  styleUrls: ['./guides.component.scss'],
})
export class GuidesComponent {
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
            "node_modules/ngx-ui-components/src/lib/assets/styles/main.scss"
          ]
      }
  `;
}
