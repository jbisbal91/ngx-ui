import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionDemo1Component } from './accordion-demo1.component';

describe('AccordionDemo1Component', () => {
  let component: AccordionDemo1Component;
  let fixture: ComponentFixture<AccordionDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccordionDemo1Component]
    });
    fixture = TestBed.createComponent(AccordionDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
