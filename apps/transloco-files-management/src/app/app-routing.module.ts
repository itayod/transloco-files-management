import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'scope'
    },
    {
      path: 'scope',
      loadChildren: () => import('./scope/scope.module').then(({ScopeModule}) => ScopeModule)
    },
    {
      path: 'inline-scope',
      loadChildren: () => import('./inline-scope/inline-scope.module').then(({InlineScopeModule}) => InlineScopeModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
