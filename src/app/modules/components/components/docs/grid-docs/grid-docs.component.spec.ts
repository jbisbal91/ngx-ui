import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridDocsComponent } from './grid-docs.component';

describe('GridDocsComponent', () => {
  let component: GridDocsComponent;
  let fixture: ComponentFixture<GridDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridDocsComponent]
    });
    fixture = TestBed.createComponent(GridDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
