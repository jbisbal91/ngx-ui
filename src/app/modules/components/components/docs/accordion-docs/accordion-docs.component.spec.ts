import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDocsComponent } from './accordion-docs.component';

describe('AccordionDocsComponent', () => {
  let component: AccordionDocsComponent;
  let fixture: ComponentFixture<AccordionDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionDocsComponent]
    });
    fixture = TestBed.createComponent(AccordionDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
