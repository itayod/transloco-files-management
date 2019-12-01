import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { InlineScopeRoutingModule } from './inline-scope-routing.module';
import { loader } from './transloco.loader';
import { InlineScopeComponent } from './inline-scope.component';



@NgModule({
  declarations: [InlineScopeComponent],
  imports: [
    CommonModule,
    InlineScopeRoutingModule,
    TranslocoModule
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: { scope: 'inline-scope', loader } }]
})
export class InlineScopeModule { }
