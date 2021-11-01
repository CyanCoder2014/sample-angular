import {Teacher} from "./teacher.model";

export interface Course {
  title: string;
  description: string;
  duration: string;
  score: bigint;
  price: number;
  teacher: Teacher;
}
