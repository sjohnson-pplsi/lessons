import { Addition } from "./addition";

describe("Addition", () => {
  it("should initialize", () => {
    const addition = new Addition();

    expect(addition.total).toBe(0);
  });

  it("should increment1", () => {
    const addition = new Addition();
    addition.increment1();

    expect(addition.total).toBe(1);

    addition.increment1();

    expect(addition.total).toBe(2);
  });

  it("should increment2", () => {
    const addition = new Addition();
    addition.increment2();

    expect(addition.total).toBe(2);

    addition.increment2();

    expect(addition.total).toBe(4);
  });

  it("should increment1 and increment2", () => {
    const addition = new Addition();
    addition.increment1();
    addition.increment2();

    expect(addition.total).toBe(3);
  });
});
