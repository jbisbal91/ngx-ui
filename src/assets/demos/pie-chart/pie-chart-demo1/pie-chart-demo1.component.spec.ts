import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartDemo1Component } from './pie-chart-demo1.component';

describe('PieChartDemo1Component', () => {
  let component: PieChartDemo1Component;
  let fixture: ComponentFixture<PieChartDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartDemo1Component]
    });
    fixture = TestBed.createComponent(PieChartDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
