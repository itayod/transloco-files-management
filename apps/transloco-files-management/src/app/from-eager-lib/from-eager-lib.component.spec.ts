import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromEagerLibComponent } from './from-eager-lib.component';

describe('FromEagerLibComponent', () => {
  let component: FromEagerLibComponent;
  let fixture: ComponentFixture<FromEagerLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromEagerLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromEagerLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
