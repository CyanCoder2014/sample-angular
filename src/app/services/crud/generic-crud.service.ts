import { Injectable } from '@angular/core';
import {GenericHttpService} from "../http/generic-http.service";
import {HttpParams} from "@angular/common/http";
import {GetResponse} from "../response/get-response";

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


}
