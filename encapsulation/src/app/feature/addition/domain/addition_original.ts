export class AdditionOriginal {
  a = 0;
  b = 0;
  total = 0;

  increment1() {
    this.a += 1;
    this.total = this.a + this.b;
  }

  increment2() {
    this.b += 2;
    this.total = this.a + this.b;
  }
}
