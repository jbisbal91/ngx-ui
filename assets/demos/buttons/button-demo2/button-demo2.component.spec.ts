import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemo2Component } from './button-demo2.component';

describe('ButtonDemo2Component', () => {
  let component: ButtonDemo2Component;
  let fixture: ComponentFixture<ButtonDemo2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDemo2Component]
    });
    fixture = TestBed.createComponent(ButtonDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
