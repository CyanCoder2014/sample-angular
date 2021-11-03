import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private http: HttpClient) {
  }

  getAll(url: string): Observable<any> {
    return this.http.get<any>(url);
  }

  get(url: string, params: HttpParams): Observable<any> {
    const options: object = {params, observe: 'response'};
    return this.http.get<any>(url, options);
  }

  post(url: string, params: HttpParams, body: object): Observable<any> {
    const options: object = {params, observe: 'response'};
    return this.http.post<any>(url, body, options);
  }

  put(url: string, params: HttpParams, body: object): Observable<any> {
    const options: object = {params, observe: 'response'};
    return this.http.put<any>(url, body, options);
  }

  delete(url: string, params: HttpParams): Observable<any> {
    const options: object = {params, observe: 'response'};
    return this.http.delete<any>(url, options);
  }
}
