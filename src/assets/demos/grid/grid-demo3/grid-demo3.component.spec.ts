import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemo3Component } from './grid-demo3.component';

describe('GridDemo3Component', () => {
  let component: GridDemo3Component;
  let fixture: ComponentFixture<GridDemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDemo3Component]
    });
    fixture = TestBed.createComponent(GridDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
