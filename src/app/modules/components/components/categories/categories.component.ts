import { Component, OnInit } from '@angular/core';
import { ComponentsService, NavComponents } from '../../components.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  components: NavComponents[] = [];

  constructor(private componentsService: ComponentsService) {}

  ngOnInit(): void {
    this.componentsService.getComponentList().subscribe((nc) => {
      this.components = nc;
    });
  }
}
