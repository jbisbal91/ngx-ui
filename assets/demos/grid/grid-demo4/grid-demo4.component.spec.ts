import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDemo4Component } from './grid-demo4.component';

describe('GridDemo4Component', () => {
  let component: GridDemo4Component;
  let fixture: ComponentFixture<GridDemo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDemo4Component]
    });
    fixture = TestBed.createComponent(GridDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
