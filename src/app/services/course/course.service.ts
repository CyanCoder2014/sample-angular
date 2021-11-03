import { Injectable } from '@angular/core';
import {GenericCrudService} from "../crud/generic-crud.service";
import {URLMaker} from "../../util/url/url-maker";
import {URLMakerImpl} from "../../util/url/url-maker-impl";
import {HttpClient, HttpParams} from "@angular/common/http";
import {GetResponse} from "../response/get-response";
import {createRequestOption} from "../../models/generic-request.model";
import {Course} from "../../models/course.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CourseService {



  private url: URLMaker;

  constructor(private crudService: GenericCrudService) {
    this.url = new URLMakerImpl('/courses');
  }


  getAll(): Observable<Course[]> {
    return this.crudService.getAll(this.url.get());
  }

}
