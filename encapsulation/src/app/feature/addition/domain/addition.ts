export class Addition {
  #total = 0;

  increment1() {
    this.#total += 1;
  }

  increment2() {
    this.#total += 2;
  }

  get total() {
    return this.#total;
  }
}
