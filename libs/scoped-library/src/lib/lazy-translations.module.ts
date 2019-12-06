import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { LazyTranslationsComponent } from './lazy-translations/lazy-translations.component';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'lazy-translations' }],
  declarations: [LazyTranslationsComponent],
  exports: [LazyTranslationsComponent]
})
export class LazyTranslationsModule {}
