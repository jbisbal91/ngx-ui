import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesComponent } from './templates.component';

describe('TemplatesComponent', () => {
  let component: TemplatesComponent;
  let fixture: ComponentFixture<TemplatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TemplatesComponent]
    });
    fixture = TestBed.createComponent(TemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
