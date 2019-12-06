import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromScopedLibComponent } from './from-scoped-lib.component';


const routes: Routes = [{path: '', component: FromScopedLibComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromScopedLibRoutingModule { }
