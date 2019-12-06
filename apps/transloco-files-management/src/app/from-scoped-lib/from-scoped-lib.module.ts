import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyTranslationsModule } from '../../../../../libs/scoped-library/src/lib/lazy-translations.module';

import { FromScopedLibRoutingModule } from './from-scoped-lib-routing.module';
import { FromScopedLibComponent } from './from-scoped-lib.component';


@NgModule({
  declarations: [FromScopedLibComponent],
  imports: [
    CommonModule,
    FromScopedLibRoutingModule,
    LazyTranslationsModule
  ]
})
export class FromScopedLibModule { }
