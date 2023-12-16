import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemo1Component } from './button-demo1.component';

describe('ButtonDemo1Component', () => {
  let component: ButtonDemo1Component;
  let fixture: ComponentFixture<ButtonDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDemo1Component]
    });
    fixture = TestBed.createComponent(ButtonDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
