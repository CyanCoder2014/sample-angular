
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
        card: [...state.card.filter(item => item.id !== action.payload.id), action.payload]
      };

    case ActionTypes.Remove:
      return {
        ...state,
        card: [...state.card.filter(item => item.id !== action.payload.id)]
      };


    default:
      return state;
  }
}
