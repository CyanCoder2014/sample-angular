
import { Action } from '@ngrx/store';
import {Course} from "../models/course.model";

export enum ActionTypes {
  Add = '[Course] Add to cart',
  Remove = '[Course] Remove from cart',
  LoadItems = '[Courses] Load items from server',
  LoadSuccess = '[Courses] Load success'
}



export class AddToCart implements Action {
  readonly type = ActionTypes.Add;

  constructor(public payload: Course) {}
}

export class GetItems implements Action {
  readonly type = ActionTypes.LoadItems;
}

export class RemoveFromCart implements Action {
  readonly type = ActionTypes.Remove;

  constructor(public payload: Course) {}
}

export class LoadItems implements Action {
  readonly type = ActionTypes.LoadSuccess;

  constructor(public payload: Course[]) {}
}

export type Actions = AddToCart | RemoveFromCart | LoadItems | GetItems;
