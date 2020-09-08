import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAgeComponent } from './error-age.component';

describe('ErrorAgeComponent', () => {
  let component: ErrorAgeComponent;
  let fixture: ComponentFixture<ErrorAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
