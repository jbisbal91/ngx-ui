import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DividerDocsComponent } from './divider-docs.component';

describe('DividerDocsComponent', () => {
  let component: DividerDocsComponent;
  let fixture: ComponentFixture<DividerDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DividerDocsComponent]
    });
    fixture = TestBed.createComponent(DividerDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
