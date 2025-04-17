import { fancyTotal } from "./fancy_total";

describe("fancyTotal", () => {
  it("should add all values", () => {
    expect(fancyTotal()).toBe(0);
    expect(fancyTotal(0)).toBe(0);
    expect(fancyTotal(0, 0)).toBe(0);
    expect(fancyTotal(1)).toBe(1);
    expect(fancyTotal(1, 0)).toBe(1);
    expect(fancyTotal(1, 2)).toBe(3);
  });
});
