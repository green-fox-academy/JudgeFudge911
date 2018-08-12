import { Injectable } from '@angular/core';

@Injectable()
export class StopwatchService {
  timeInSeconds: number;
  readonly DELAY = 3000;

  constructor() {}

  countTillNextQuestion() {
    this.timeInSeconds = this.DELAY / 1000;
    const counter = setInterval(() => (this.timeInSeconds = this.timeInSeconds - 1), 1000);
    setTimeout(() => clearInterval(counter), this.DELAY);
  }

  callAfterDelay(fn: Function): void {
    setTimeout(() => fn(), this.DELAY);
  }
}
