import { Answer } from './answer';

export interface Question {
  _id: string;
  description: string;
  answers: [Answer, Answer, Answer, Answer];
}
