import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslocoModule, TRANSLOCO_CONFIG, TranslocoConfig } from '@ngneat/transloco';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { translocoLoader } from './transloco.loader';

@NgModule({
  declarations: [AppComponent],
  imports     : [
    BrowserModule,
    HttpClientModule,
    TranslocoModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule
  ],
  providers   : [{
    provide : TRANSLOCO_CONFIG,
    useValue: {
      availableLangs: ['en', 'es'],
      defaultLang   : 'en',
      prodMode      : environment.production
    } as TranslocoConfig
  },
    translocoLoader
  ],
  bootstrap   : [AppComponent]
})
export class AppModule {
}
