import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface NavComponents {
  path: string;
  title: string;
  src: string;
}

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  constructor() {}

  getComponentList(): Observable<NavComponents[]> {
    const navComponents: NavComponents[] = [
      // { path: '/components/basic/autocomplete', title: 'Autocomplete' },
      {
        path: '/components/basic/badge',
        title: 'Badge',
        src: 'assets/images/components/Badge.svg',
      },
      // { path: '/components/basic/bottom-sheet', title: 'Bottom Sheet' },
      {
        path: '/components/basic/button',
        title: 'Button',
        src: 'assets/images/components/Button.svg',
      },
      // { path: '/components/basic/button-toggle', title: 'Button toggle' },
      {
        path: '/components/basic/carousel',
        title: 'Carousel',
        src: 'assets/images/components/Carousel.svg',
      },
      {
        path: '/components/basic/card',
        title: 'Card',
        src: 'assets/images/components/Card.svg',
      },
      // { path: '/components/basic/checkbox', title: 'Checkbox' },
      // { path: '/components/basic/chips', title: 'Chips' },
      // { path: '/components/basic/core', title: 'Core' },
      // { path: '/components/basic/datepicker', title: 'Datepicker' },
      // { path: '/components/basic/dialog', title: 'Dialog' },
      {
        path: '/components/basic/divider',
        title: 'Divider',
        src: 'assets/images/components/Divider.svg',
      },
      {
        path: '/components/basic/expansion',
        title: 'Expansion Panel',
        src: 'assets/images/components/ExpansionPanel.svg',
      },
      // { path: '/components/basic/form-field', title: 'Form field' },
      {
        path: '/components/basic/grid',
        title: 'Grid',
        src: 'assets/images/components/Grid.svg',
      },
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
      {
        path: '/components/basic/switch',
        title: 'Switch',
        src: 'assets/images/components/Switch.svg',
      },
      // { path: '/components/basic/table', title: 'Table' },
      {
        path: '/components/basic/tabs',
        title: 'Tabs',
        src: 'assets/images/components/Tabs.svg',
      },
      {
        path: '/components/basic/tags',
        title: 'Tags',
        src: 'assets/images/components/Tags.svg',
      },
      // { path: '/components/basic/toolbar', title: 'Toolbar' },
      // { path: '/components/basic/tooltip', title: 'Tooltip' },
      // { path: '/components/basic/tree', title: 'tree' },
    ];
    return of(navComponents);
  }
}
