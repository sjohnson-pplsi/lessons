export class AdditionSettersModern {
  private _a = 0;
  get a() {
    return this._a;
  }
  set a(a: number) {
    this._a = a;
  }

  private _b = 0;
  get b() {
    return this._b;
  }
  set b(b: number) {
    this._b = b;
  }

  incrementA() {
    this.a++;
  }

  incrementB() {
    this._b++;
  }

  get total() {
    return this.a + this._b;
  }
}
