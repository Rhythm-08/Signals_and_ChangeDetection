import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionRefComponent } from './change-detection-ref.component';

describe('ChangeDetectionRefComponent', () => {
  let component: ChangeDetectionRefComponent;
  let fixture: ComponentFixture<ChangeDetectionRefComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeDetectionRefComponent]
    });
    fixture = TestBed.createComponent(ChangeDetectionRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
