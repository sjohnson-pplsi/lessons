export class Addition {
  #a = 0;
  #b = 0;

  increment1() {
    this.#a++;
  }

  increment2() {
    this.#b += 2;
  }

  get total() {
    return this.#a + this.#b;
  }
}
