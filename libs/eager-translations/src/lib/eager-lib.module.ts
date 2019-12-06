import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoService, TranslocoModule } from '@ngneat/transloco';
import { FromLibComponent } from './from-lib/from-lib.component';
import en from './i18n/en.json';
import es from './i18n/es.json';

@NgModule({
  imports: [CommonModule, TranslocoModule],
  exports: [FromLibComponent],
  declarations: [FromLibComponent]
})
export class EagerLibModule {
  constructor(private translocoService: TranslocoService) {
    this.translocoService.setTranslation({
      'fromLib': en
    }, 'en');
    this.translocoService.setTranslation({
      'fromLib': es
    }, 'es');
  }
}
