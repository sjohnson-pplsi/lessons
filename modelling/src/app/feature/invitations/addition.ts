import { Observable } from "../observable";

export class Addition extends Observable {
  #total = 0;

  increment1() {
    this.#total += 1;
    this.update();
  }

  increment2() {
    this.#total += 2;
    this.update();
  }

  get total() {
    return this.#total;
  }
}
