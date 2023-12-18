import { Injectable } from '@angular/core';

const theme_key: string = 'theme-storage-current-name';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  getTheme(): any {
    return document.documentElement.getAttribute('theme');
  }

  initTheme() {
    const currentTheme = localStorage.getItem(theme_key);
    this.setTheme(currentTheme ? currentTheme : 'light');
  }

  setTheme(name: string) {
    document.documentElement.setAttribute('theme', name);
    localStorage.setItem(theme_key, name);
  }
}
