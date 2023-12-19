import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDemo1Component } from './card-demo1.component';

describe('CardDemo1Component', () => {
  let component: CardDemo1Component;
  let fixture: ComponentFixture<CardDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDemo1Component]
    });
    fixture = TestBed.createComponent(CardDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
