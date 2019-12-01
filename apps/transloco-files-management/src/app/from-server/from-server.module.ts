import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TRANSLOCO_SCOPE, TranslocoModule } from '@ngneat/transloco';
import { FromServerRoutingModule } from './from-server-routing.module';
import { FromServerComponent } from './from-server/from-server.component';

export const scope = function(http: HttpClient) {
  const loader =  ['en', 'es'].reduce((acc, lang) => {
    acc[lang] = () => http.get('api/translations', {params: {lang}}).toPromise();
    return acc;
  }, {});
  return {scope: 'from-server', loader: loader}
};


@NgModule({
  declarations: [FromServerComponent],
  imports: [
    TranslocoModule,
    FromServerRoutingModule,
  ],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      deps: [HttpClient],
      useFactory: scope
    }
  ]
})
export class FromServerModule { }
