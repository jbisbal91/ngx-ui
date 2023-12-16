import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerDemo1Component } from './divider-demo1.component';

describe('DividerDemo1Component', () => {
  let component: DividerDemo1Component;
  let fixture: ComponentFixture<DividerDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividerDemo1Component]
    });
    fixture = TestBed.createComponent(DividerDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
