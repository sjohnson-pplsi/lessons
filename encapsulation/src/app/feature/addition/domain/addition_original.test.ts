import { AdditionOriginal } from "./addition_original";

describe("AdditionOriginal", () => {
  it("should initialize", () => {
    const addition = new AdditionOriginal();

    expect(addition.a).toBe(0);
    expect(addition.b).toBe(0);
    expect(addition.total).toBe(0);
  });

  it("should increment1", () => {
    const addition = new AdditionOriginal();
    addition.increment1();

    expect(addition.a).toBe(1);
    expect(addition.b).toBe(0);
    expect(addition.total).toBe(1);

    addition.increment1();

    expect(addition.a).toBe(2);
    expect(addition.b).toBe(0);
    expect(addition.total).toBe(2);
  });

  it("should increment2", () => {
    const addition = new AdditionOriginal();
    addition.increment2();

    expect(addition.a).toBe(0);
    expect(addition.b).toBe(2);
    expect(addition.total).toBe(2);

    addition.increment2();

    expect(addition.a).toBe(0);
    expect(addition.b).toBe(4);
    expect(addition.total).toBe(4);
  });

  it("should increment1 and increment2", () => {
    const addition = new AdditionOriginal();
    addition.increment1();
    addition.increment2();

    expect(addition.a).toBe(1);
    expect(addition.b).toBe(2);
    expect(addition.total).toBe(3);
  });

  // Why???
  // Why can you do this???
  it("should do something terrible...", () => {
    const addition = new AdditionOriginal();
    addition.a = 20;
    addition.b = 3000;
    addition.total = -543210;

    expect(addition.a).toBe(20);
    expect(addition.b).toBe(3000);
    expect(addition.total).toBe(-543210);
  });
});
