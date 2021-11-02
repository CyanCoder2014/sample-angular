import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Course} from "../models/course.model";
import {select,Store} from "@ngrx/store";
import {AppCourseState} from "../app.state";
import {ActionTypes, AddToCart, GetItems, RemoveFromCart} from "../store/actions";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses!: Observable<Course[]>;
  test:any = 10;

  constructor(private store: Store<AppCourseState>) {
    this.courses = this.store.select(state => state.courses);
  }



  ngOnInit() {
    this.store.dispatch(new GetItems());
  }



  addToCart(item: Course) {
    this.store.dispatch(new AddToCart(item));
  }

  removeFromCart(item: Course) {
    this.store.dispatch(new RemoveFromCart(item));
  }






}
