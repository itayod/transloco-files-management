import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EagerLibModule } from '../../../../../libs/eager-translations/src/lib/eager-lib.module';

import { FromEagerLibRoutingModule } from './from-eager-lib-routing.module';
import { FromEagerLibComponent } from './from-eager-lib.component';


@NgModule({
  declarations: [FromEagerLibComponent],
  imports: [
    CommonModule,
    EagerLibModule,
    FromEagerLibRoutingModule
  ]
})
export class FromEagerLibModule { }
