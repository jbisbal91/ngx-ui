import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent {
  components = [
    // { path: '/components/basic/autocomplete', title: 'Autocomplete' },
    // { path: '/components/basic/badge', title: 'Badge' },
    // { path: '/components/basic/bottom-sheet', title: 'Bottom Sheet' },
    {
      path: '/components/basic/button',
      title: 'Button',
      src: '/assets/images/components/Button.svg',
    },
    // { path: '/components/basic/button-toggle', title: 'Button toggle' },
    {
      path: '/components/basic/card',
      title: 'Card',
      src: '/assets/images/components/Card.svg',
    },
    // { path: '/components/basic/checkbox', title: 'Checkbox' },
    // { path: '/components/basic/chips', title: 'Chips' },
    // { path: '/components/basic/core', title: 'Core' },
    // { path: '/components/basic/datepicker', title: 'Datepicker' },
    // { path: '/components/basic/dialog', title: 'Dialog' },
    {
      path: '/components/basic/divider',
      title: 'Divider',
      src: '/assets/images/components/Divider.svg',
    },
    {
      path: '/components/basic/expansion',
      title: 'Expansion Panel',
      src: '/assets/images/components/ExpansionPanel.svg',
    },
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
    {
      path: '/components/basic/tabs',
      title: 'Tabs',
      src: '/assets/images/components/Tabs.svg',
    },
    // { path: '/components/basic/toolbar', title: 'Toolbar' },
    // { path: '/components/basic/tooltip', title: 'Tooltip' },
    // { path: '/components/basic/tree', title: 'tree' },
  ];
}
