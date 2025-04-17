export class AdditionSetters {
  private a = 0;
  private b = 0;

  getA() {
    return this.a;
  }

  setA(a = 0) {
    this.a = a;
  }

  getB() {
    return this.b;
  }

  setB(b = 0) {
    this.b = b;
  }

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
