import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../models/course.model";
import {RemoveFromCart} from "../store/actions";
import {Store} from "@ngrx/store";
import {AppCourseState} from "../app.state";
import {Card} from "../models/card.model";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  faTimes = faTimes;

  constructor(private store: Store<AppCourseState>) {}

  addedToCart:boolean = true;
  @Input() cartItem!: Card;


  removeFromCart(item: Course) {
    this.store.dispatch(new RemoveFromCart(item));
    this.addedToCart = false;
  }





  ngOnInit(): void {
  }

}
