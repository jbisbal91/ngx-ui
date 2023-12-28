import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  moduleImport = `
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';

  import { TabModule } from 'ngx-ui-jbisbal/tab';


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
        "node_modules/ngx-ui-jbisbal/ngx-ui-components.min.scss"
      ]
  }
`;
}
