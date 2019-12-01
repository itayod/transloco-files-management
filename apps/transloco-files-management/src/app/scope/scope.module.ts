import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScopeRoutingModule } from './scope-routing.module';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { ScopeComponent } from './scope.component';


@NgModule({
  declarations: [ScopeComponent],
  imports: [
    CommonModule,
    ScopeRoutingModule,
    TranslocoModule
  ],
  providers: [{ provide: TRANSLOCO_SCOPE, useValue: 'scope' }]
})
export class ScopeModule { }
