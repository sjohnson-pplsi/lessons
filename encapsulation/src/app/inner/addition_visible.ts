export class AdditionVisible {
  a = 0;
  b = 0;

  incrementA() {
    this.a++;
  }

  incrementB() {
    this.b++;
  }

  get total() {
    return this.a + this.b;
  }
}
