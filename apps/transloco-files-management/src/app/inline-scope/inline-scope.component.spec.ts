import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineScopeComponent } from './inline-scope.component';

describe('InlineScopeComponent', () => {
  let component: InlineScopeComponent;
  let fixture: ComponentFixture<InlineScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InlineScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
