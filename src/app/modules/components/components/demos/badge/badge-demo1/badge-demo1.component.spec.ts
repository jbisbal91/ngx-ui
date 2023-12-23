import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDemo1Component } from './badge-demo1.component';

describe('BadgeDemo1Component', () => {
  let component: BadgeDemo1Component;
  let fixture: ComponentFixture<BadgeDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeDemo1Component]
    });
    fixture = TestBed.createComponent(BadgeDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
