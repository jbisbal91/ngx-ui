import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar.component';
@NgModule({
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
  imports: [CommonModule, HttpClientModule],
})
export class NavbarModule {}
