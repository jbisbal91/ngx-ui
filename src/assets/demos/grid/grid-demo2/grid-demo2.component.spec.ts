import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemo2Component } from './grid-demo2.component';

describe('GridDemo1Component', () => {
  let component: GridDemo2Component;
  let fixture: ComponentFixture<GridDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDemo2Component]
    });
    fixture = TestBed.createComponent(GridDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
