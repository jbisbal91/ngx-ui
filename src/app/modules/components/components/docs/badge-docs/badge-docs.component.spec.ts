import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeDocsComponent } from './badge-docs.component';

describe('BadgeDocsComponent', () => {
  let component: BadgeDocsComponent;
  let fixture: ComponentFixture<BadgeDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BadgeDocsComponent]
    });
    fixture = TestBed.createComponent(BadgeDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
