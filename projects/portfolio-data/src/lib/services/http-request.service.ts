import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http
      .get<any>("https://api.realworld.io/api/articles/Ill-quantify-the-redundant-TCP-bus-that-should-hard-drive-the-ADP-bandwidth!-553");
  }
}
