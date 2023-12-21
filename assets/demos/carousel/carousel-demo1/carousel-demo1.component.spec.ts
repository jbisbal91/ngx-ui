import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDemo1Component } from './carousel-demo1.component';

describe('CarouselDemo1Component', () => {
  let component: CarouselDemo1Component;
  let fixture: ComponentFixture<CarouselDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselDemo1Component]
    });
    fixture = TestBed.createComponent(CarouselDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
