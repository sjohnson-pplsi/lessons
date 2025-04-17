import { getFancyTotal } from "./fancy_total";

describe("fancyTotal", () => {
  it("should add all values", () => {
    expect(getFancyTotal()).toBe(0);
    expect(getFancyTotal(0)).toBe(0);
    expect(getFancyTotal(0, 0)).toBe(0);
    expect(getFancyTotal(1)).toBe(1);
    expect(getFancyTotal(1, 0)).toBe(1);
    expect(getFancyTotal(1, 2)).toBe(3);
  });
});
