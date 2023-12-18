import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  theme: string = 'light';

  constructor(private router: Router, private themeService: ThemeService) {
    this.themeService.setTheme(this.theme);
    this.theme = this.themeService.getTheme();
  }

  setTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.theme);
  }

  navigateByUrl(path: string) {
    this.router.navigateByUrl(path);
  }
}
