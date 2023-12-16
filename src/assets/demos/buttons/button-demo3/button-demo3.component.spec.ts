import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemo3Component } from './button-demo3.component';

describe('ButtonDemo3Component', () => {
  let component: ButtonDemo3Component;
  let fixture: ComponentFixture<ButtonDemo3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDemo3Component]
    });
    fixture = TestBed.createComponent(ButtonDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
