import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FromServerComponent } from './from-server/from-server.component';


const routes: Routes = [{path: '', component: FromServerComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FromServerRoutingModule { }
