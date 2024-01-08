import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PieChartDocsComponent } from './pie-chart-docs.component';

describe('PieChartDocsComponent', () => {
  let component: PieChartDocsComponent;
  let fixture: ComponentFixture<PieChartDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PieChartDocsComponent]
    });
    fixture = TestBed.createComponent(PieChartDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
