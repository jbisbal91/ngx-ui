import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDemo1Component } from './timeline-demo1.component';

describe('TimelineDemo1Component', () => {
  let component: TimelineDemo1Component;
  let fixture: ComponentFixture<TimelineDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineDemo1Component]
    });
    fixture = TestBed.createComponent(TimelineDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
