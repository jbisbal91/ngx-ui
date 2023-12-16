import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNavComponent } from './component-nav.component';

describe('ComponentNavComponent', () => {
  let component: ComponentNavComponent;
  let fixture: ComponentFixture<ComponentNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentNavComponent]
    });
    fixture = TestBed.createComponent(ComponentNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
