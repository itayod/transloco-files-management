import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineScopeComponent } from './inline-scope.component';


const routes: Routes = [{path: '', component: InlineScopeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InlineScopeRoutingModule { }
