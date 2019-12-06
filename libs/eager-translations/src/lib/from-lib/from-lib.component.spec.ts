import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromLibComponent } from './from-lib.component';

describe('FromLibComponent', () => {
  let component: FromLibComponent;
  let fixture: ComponentFixture<FromLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
