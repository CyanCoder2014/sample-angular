import {Course} from "./models/course.model";
import {Card} from "./models/card.model";


export interface AppCourseState {
  readonly courses: Course[];
  readonly card: Card[];
}
