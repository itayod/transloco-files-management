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
    {
      path: 'from-server',
      loadChildren: () =>
        import('./from-server/from-server.module').then(({FromServerModule}) => FromServerModule)
    },
    {
      path: 'from-eager-lib',
      loadChildren: () =>
        import('./from-eager-lib/from-eager-lib.module').then(({FromEagerLibModule}) => FromEagerLibModule)
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
