import { async, TestBed } from '@angular/core/testing';
import { LazyTranslationsModule } from './lazy-translations.module';

describe('LazyTranslationsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [LazyTranslationsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(LazyTranslationsModule).toBeDefined();
  });
});
