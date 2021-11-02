import {Component, Input, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Course} from "../models/course.model";
import {AddToCart, RemoveFromCart} from "../store/actions";
import {AppCourseState} from "../app.state";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {



  constructor(private store: Store<AppCourseState>) {}

  addedToCart:boolean = false;
  @Input() course!: Course;

  addToCart(item: Course) {
    this.store.dispatch(new AddToCart(item));
    this.addedToCart = true;
  }



  ngOnInit() {}



}
