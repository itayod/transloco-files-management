import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyTranslationsComponent } from './lazy-translations.component';

describe('LazyTranslationsComponent', () => {
  let component: LazyTranslationsComponent;
  let fixture: ComponentFixture<LazyTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
