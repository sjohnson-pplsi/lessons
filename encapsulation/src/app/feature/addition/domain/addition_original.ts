export class AdditionOriginal {
  a = 0;
  b = 0;
  total = 0;

  increment1() {
    this.a += 1;
    this.total += 1;
  }

  increment2() {
    this.b += 2;
    this.total += 2;
  }
}
