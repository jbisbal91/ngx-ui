import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineDocsComponent } from './timeline-docs.component';

describe('TimelineDocsComponent', () => {
  let component: TimelineDocsComponent;
  let fixture: ComponentFixture<TimelineDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineDocsComponent]
    });
    fixture = TestBed.createComponent(TimelineDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
