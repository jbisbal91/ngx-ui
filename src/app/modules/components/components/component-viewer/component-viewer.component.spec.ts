import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentViewerComponent } from './component-viewer.component';

describe('ComponentViewerComponent', () => {
  let component: ComponentViewerComponent;
  let fixture: ComponentFixture<ComponentViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentViewerComponent]
    });
    fixture = TestBed.createComponent(ComponentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
