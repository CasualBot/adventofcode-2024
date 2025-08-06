import { negativeRange, positiveRange, withinFloorRange } from "./day2";
import { describe } from "node:test";

describe("withinFloorRange", () => {
  test.each([
    [[1, 2, 3, -3], true],
    [[-1, -2, -3, -2, -1, 1], true],
    [[1, -2, 3, -9], false],
    [[0, 0, 0, 1, 1, 2, 3], false],
  ])(`%s should return %s`, (floors, result) => {
    expect(withinFloorRange(floors)).toBe(result);
  });
});

describe("positiveRange", () => {
  test.each([
    [[1, 2, 3, 4], true],
    [[1, -2, 3, -4], false],
  ])(`%s is positive to be %s`, (floors: Array<number>, result: boolean) => {
    expect(positiveRange(floors)).toBe(result);
  });
});

describe("negativeRange", () => {
  test.each([
    [[-1, -2, -3, -4], true],
    [[1, -2, 3, -4], false],
  ])(`%s should be %s`, (floors: Array<number>, result: boolean): void => {
    expect(negativeRange(floors)).toEqual(result);
  });
});
