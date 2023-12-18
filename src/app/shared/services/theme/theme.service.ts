import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  getTheme(): any  {
    return document.documentElement.getAttribute('theme');
  }

  setTheme(name:string) {
    document.documentElement.setAttribute('theme', name);
  }
}
