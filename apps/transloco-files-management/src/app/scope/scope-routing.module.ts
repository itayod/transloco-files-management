import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScopeComponent } from './scope.component';


const routes: Routes = [{path: '', component: ScopeComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScopeRoutingModule { }
