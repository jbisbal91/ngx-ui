import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-components-root',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent {

  activatedRoute!: string;

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activatedRoute = val.urlAfterRedirects;
      }
    });
  }

  navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }

  checkActivatedRoute(route: string) {
    return !this.activatedRoute
      ? false
      : this.activatedRoute.indexOf(route) >= 0;
  }
  
}
