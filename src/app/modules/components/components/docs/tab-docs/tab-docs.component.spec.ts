import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabDocsComponent } from './tab-docs.component';

describe('TabDocsComponent', () => {
  let component: TabDocsComponent;
  let fixture: ComponentFixture<TabDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TabDocsComponent]
    });
    fixture = TestBed.createComponent(TabDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
