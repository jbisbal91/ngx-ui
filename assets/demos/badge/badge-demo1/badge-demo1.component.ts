import { Component } from '@angular/core';

@Component({
  selector: 'app-badge-demo1',
  templateUrl: './badge-demo1.component.html',
  styleUrls: ['./badge-demo1.component.scss'],
})
export class BadgeDemo1Component {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
