import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@transloco-files-management/api-interfaces';

@Component({
  selector: 'transloco-files-management-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
