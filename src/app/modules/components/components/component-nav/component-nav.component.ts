import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-component-nav',
  templateUrl: './component-nav.component.html',
  styleUrls: ['./component-nav.component.scss'],
})
export class ComponentNavComponent {
  activatedRoute!: string;

  routes: { path: string; title: string }[] = [];

  constructor(private router: Router) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activatedRoute = val.urlAfterRedirects;
        this.routes = this.checkActivatedRoute('/advanced')
          ? this.routesAdvancedComponents
          : this.routesBasicComponents;
      }
    });
  }

  routesAdvancedComponents = [
    { path: '/components/advanced/pie-chart', title: 'Pie Chart' },
  ];

  routesBasicComponents = [
    // { path: '/components/basic/autocomplete', title: 'Autocomplete' },
    // { path: '/components/basic/badge', title: 'Badge' },
    // { path: '/components/basic/bottom-sheet', title: 'Bottom Sheet' },
    { path: '/components/basic/button', title: 'Button' },
    // { path: '/components/basic/button-toggle', title: 'Button toggle' },
    // { path: '/components/basic/card', title: 'Card' },
    // { path: '/components/basic/checkbox', title: 'Checkbox' },
    // { path: '/components/basic/chips', title: 'Chips' },
    // { path: '/components/basic/core', title: 'Core' },
    // { path: '/components/basic/datepicker', title: 'Datepicker' },
    // { path: '/components/basic/dialog', title: 'Dialog' },
    { path: '/components/basic/divider', title: 'Divider' },
    { path: '/components/basic/expansion', title: 'Expansion Panel' },
    // { path: '/components/basic/form-field', title: 'Form field' },
    // { path: '/components/basic/grid-list', title: 'Grid List' },
    // { path: '/components/basic/icon', title: 'Icon' },
    // { path: '/components/basic/input', title: 'Input' },
    // { path: '/components/basic/list', title: 'List' },
    // { path: '/components/basic/menu', title: 'Menu' },
    // { path: '/components/basic/paginator', title: 'Paginator' },
    // { path: '/components/basic/progress-bar', title: 'Progress bar' },
    // { path: '/components/basic/progress-spinner', title: 'Progress spinner' },
    // { path: '/components/basic/radio', title: 'Radio button' },
    // { path: '/components/basic/ripple', title: 'Ripples' },
    // { path: '/components/basic/select', title: 'Select' },
    // { path: '/components/basic/sidenav', title: 'Sidenav' },
    // { path: '/components/basic/signature', title: 'Signature' },
    // { path: '/components/basic/slide-toggle', title: 'Slide toggle' },
    // { path: '/components/basic/slider', title: 'Slider' },
    // { path: '/components/basic/snack-bar', title: 'Snackbar' },
    // { path: '/components/basic/sort', title: 'Sort header' },
    // { path: '/components/basic/stepper', title: 'Stepper' },
    // { path: '/components/basic/table', title: 'Table' },
    { path: '/components/basic/tabs', title: 'Tabs' },
    // { path: '/components/basic/toolbar', title: 'Toolbar' },
    // { path: '/components/basic/tooltip', title: 'Tooltip' },
    // { path: '/components/basic/tree', title: 'tree' },
  ];

  checkActivatedRoute(route: string) {
    return !this.activatedRoute
      ? false
      : this.activatedRoute.indexOf(route) >= 0;
  }
}
