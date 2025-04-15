import { Addition } from "./addition";

describe("addition", () => {
  it("should increment", () => {
    const addition = new Addition();
    expect(addition.total).toBe(0);

    addition.increment1();
    expect(addition.total).toBe(1);

    addition.increment2();
    expect(addition.total).toBe(3);
  });
});
