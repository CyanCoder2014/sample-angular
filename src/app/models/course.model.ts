import {Teacher} from "./teacher.model";

export interface Course {
  id: bigint;
  title: string;
  description: string;
  duration: string;
  score: bigint;
  price: number;
  teacher: Teacher;
}
