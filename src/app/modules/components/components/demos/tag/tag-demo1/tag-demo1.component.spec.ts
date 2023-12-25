import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagDemo1Component } from './tag-demo1.component';

describe('TagDemo1Component', () => {
  let component: TagDemo1Component;
  let fixture: ComponentFixture<TagDemo1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagDemo1Component]
    });
    fixture = TestBed.createComponent(TagDemo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
