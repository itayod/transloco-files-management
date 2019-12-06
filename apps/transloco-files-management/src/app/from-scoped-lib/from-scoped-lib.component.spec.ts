import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromScopedLibComponent } from './from-scoped-lib.component';

describe('FromScopedLibComponent', () => {
  let component: FromScopedLibComponent;
  let fixture: ComponentFixture<FromScopedLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromScopedLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromScopedLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
