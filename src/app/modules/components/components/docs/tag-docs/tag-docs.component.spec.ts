import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDocsComponent } from './tag-docs.component';

describe('TagDocsComponent', () => {
  let component: TagDocsComponent;
  let fixture: ComponentFixture<TagDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagDocsComponent]
    });
    fixture = TestBed.createComponent(TagDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
