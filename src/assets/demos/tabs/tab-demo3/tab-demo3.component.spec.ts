import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDemo3Component } from './tab-demo3.component';

describe('TabDemo3Component', () => {
  let component: TabDemo3Component;
  let fixture: ComponentFixture<TabDemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabDemo3Component]
    });
    fixture = TestBed.createComponent(TabDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
