import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDemo4Component } from './button-demo4.component';

describe('ButtonDemo4Component', () => {
  let component: ButtonDemo4Component;
  let fixture: ComponentFixture<ButtonDemo4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonDemo4Component]
    });
    fixture = TestBed.createComponent(ButtonDemo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
