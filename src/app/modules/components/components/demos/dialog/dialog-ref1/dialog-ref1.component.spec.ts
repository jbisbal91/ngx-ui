import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogRef1Component } from './dialog-ref1.component';

describe('DialogRef1Component', () => {
  let component: DialogRef1Component;
  let fixture: ComponentFixture<DialogRef1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogRef1Component]
    });
    fixture = TestBed.createComponent(DialogRef1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
