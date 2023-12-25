import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-components-root',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  activatedRouteName: string = '';

  constructor(private router: Router, private titleService: Title) {}

  ngOnInit(): void {
    this.activatedRouteName = this.titleService
      .getTitle()
      .replace(' | NGX-UI', '');
    this.setRouteName();
  }

  setRouteName() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        const urlParts = url.split('/').filter((part: any) => part !== '');
        this.activatedRouteName = this.capitalizeFirstLetter(
          urlParts[urlParts.length - 1]
        );
      });
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
