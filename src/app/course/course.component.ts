import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../models/course.model";
import {select,Store} from "@ngrx/store";
import {AppCourseState} from "../app.state";
import {ActionTypes, AddToCart, GetItems, RemoveFromCart} from "../store/actions";
import {Card} from "../models/card.model";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses!: Course[];
  cards!: Card[];

  constructor(private store: Store<{ courses: AppCourseState}>) {
    store.pipe(select('courses')).subscribe(data => (this.courses = data.courses));
    store.pipe(select('courses')).subscribe(data => (this.cards = data.card));
  }



  ngOnInit() {
    this.store.dispatch(new GetItems());
  }


}
