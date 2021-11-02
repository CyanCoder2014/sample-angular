import {Course} from "./course.model";
import {Teacher} from "./teacher.model";

export interface Card {
  id: bigint;
  title: string;
  description: string;
  duration: string;
  score: bigint;
  price: number;
  teacher: Teacher;
}
