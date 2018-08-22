import { Answer } from './answer';

export interface Question {
  _id: string;
  description: string;
  answers: [string, string, string, string];
  correctId: number;
}
