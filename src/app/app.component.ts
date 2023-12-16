import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngx-ui';

  constructor(private titleService: Title, private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        const urlParts = url.split('/').filter((part: any) => part !== '');
        this.title =
          urlParts.length === 0
            ? 'NGX-UI | Angular UI component library'
            : this.capitalizeFirstLetter(urlParts[urlParts.length - 1]) +
              ' | NGX-UI';
        this.titleService.setTitle(this.title);
      });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
