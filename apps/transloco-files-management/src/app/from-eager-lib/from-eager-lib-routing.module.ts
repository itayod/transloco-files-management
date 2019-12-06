import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromEagerLibComponent } from './from-eager-lib.component';


const routes: Routes = [{path: '', component: FromEagerLibComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromEagerLibRoutingModule { }
