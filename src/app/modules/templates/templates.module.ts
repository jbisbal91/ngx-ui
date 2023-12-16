import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplatesComponent } from './templates.component';
import { TemplatesRoutingModule } from './templates-routing.module';

const components = [TemplatesComponent];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule, TemplatesRoutingModule],
})
export class TemplatesModule {}
