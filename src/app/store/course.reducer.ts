
import { Course } from '../models/course.model';
import {Actions, ActionTypes} from './actions';
import {AppCourseState} from "../app.state";


export function courseReducer(state: AppCourseState = {courses:[], card:[]}, action:any ){
  switch (action.type) {

    case ActionTypes.LoadSuccess:
      return {
        ...state,
        courses: [...action.payload]
      };


    case ActionTypes.Add:
      return {
        ...state,
        cart: [...state.card, action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        cart: [...state.card.filter(item => item.item !== action.payload.item)]
      };


    default:
      return state;
  }
}
