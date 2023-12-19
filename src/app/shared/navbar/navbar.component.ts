import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ThemeService } from '../services/theme/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  theme: string = 'light';

  activatedRoute!: string;

  constructor(private router: Router, private themeService: ThemeService) {
    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.activatedRoute = val.urlAfterRedirects;
      }
    });
  }

  ngOnInit(): void {
    this.theme = this.themeService.getTheme();
  }

  setTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    this.themeService.setTheme(this.theme);
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
