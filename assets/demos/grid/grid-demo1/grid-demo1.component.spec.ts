import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemo1Component } from './grid-demo1.component';

describe('GridDemo1Component', () => {
  let component: GridDemo1Component;
  let fixture: ComponentFixture<GridDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDemo1Component]
    });
    fixture = TestBed.createComponent(GridDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
