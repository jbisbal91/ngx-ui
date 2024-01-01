import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDemo2Component } from './tab-demo2.component';

describe('TabDemo2Component', () => {
  let component: TabDemo2Component;
  let fixture: ComponentFixture<TabDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabDemo2Component]
    });
    fixture = TestBed.createComponent(TabDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
