export function fancyTotal(...values: number[]) {
  return values.reduce((total, value) => total + value, 0);
}
