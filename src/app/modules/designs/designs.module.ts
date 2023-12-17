import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesignsComponent } from './designs.component';
import { DesignsRoutingModule } from './designs-routing.module';

const components = [DesignsComponent];

@NgModule({
  declarations: [components],
  exports: [components],
  imports: [CommonModule, DesignsRoutingModule],
})
export class DesignsModule {}
