import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchDemo1Component } from './switch-demo1.component';

describe('SwitchDemo1Component', () => {
  let component: SwitchDemo1Component;
  let fixture: ComponentFixture<SwitchDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwitchDemo1Component]
    });
    fixture = TestBed.createComponent(SwitchDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
