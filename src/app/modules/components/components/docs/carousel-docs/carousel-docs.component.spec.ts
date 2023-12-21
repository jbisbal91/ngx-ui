import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDocsComponent } from './carousel-docs.component';

describe('CarouselDocsComponent', () => {
  let component: CarouselDocsComponent;
  let fixture: ComponentFixture<CarouselDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselDocsComponent]
    });
    fixture = TestBed.createComponent(CarouselDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
