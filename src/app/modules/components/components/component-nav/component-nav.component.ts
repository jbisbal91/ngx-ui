import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ComponentsService, NavComponents } from '../../components.service';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss'],
})
export class ComponentNavComponent implements OnInit  {
  activatedRoute!: string;
  
  routes: NavComponents[] = [];

  constructor(private router: Router,private componentsService: ComponentsService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activatedRoute = val.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
      this.componentsService.getComponentList().subscribe((nc) => {
      this.routes = nc;
    });
  }

  checkActivatedRoute(route: string) {
    return !this.activatedRoute
      ? false
      : this.activatedRoute.indexOf(route) >= 0;
  }
}
