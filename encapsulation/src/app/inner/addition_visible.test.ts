import { AdditionVisible } from "./addition_visible";

describe("AdditionVisible", () => {
  it("should increment", () => {
    const addition = new AdditionVisible();
    expect(addition.a).toBe(0);
    expect(addition.b).toBe(0);
    expect(addition.total).toBe(0);

    addition.incrementA();
    expect(addition.a).toBe(1);
    expect(addition.b).toBe(0);
    expect(addition.total).toBe(1);

    addition.incrementB();
    expect(addition.a).toBe(1);
    expect(addition.b).toBe(1);
    expect(addition.total).toBe(2);
  });
});
