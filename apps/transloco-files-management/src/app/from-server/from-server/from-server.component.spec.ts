import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FromServerComponent } from './from-server.component';

describe('FromServerComponent', () => {
  let component: FromServerComponent;
  let fixture: ComponentFixture<FromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
