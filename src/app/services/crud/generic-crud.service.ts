import { Injectable } from '@angular/core';
import {GenericHttpService} from "../http/generic-http.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {GetResponse} from "../response/get-response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService {


  constructor(private http: GenericHttpService) {
  }

  get(url: string, params: HttpParams, response: GetResponse) {
    this.http.get(url, params).subscribe(
      data => response.onGetSuccess(data),
      error => response.onGetError(error));
  }

  getAll(url:string):Observable<any> {
    return this.http.getAll(url);
  }

}
