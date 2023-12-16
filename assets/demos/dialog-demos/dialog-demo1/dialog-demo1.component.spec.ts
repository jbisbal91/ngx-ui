import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDemo1Component } from './dialog-demo1.component';

describe('DialogDemo1Component', () => {
  let component: DialogDemo1Component;
  let fixture: ComponentFixture<DialogDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogDemo1Component]
    });
    fixture = TestBed.createComponent(DialogDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
