import { it, describe, expect } from "vitest";

import { add } from "./add";

describe("add", () => {
  it("should add two numbers", () => {
    const numbers = [1, 2];
    const expectedResult = 3;

    const result = add(...numbers);

    expect(result).toBe(expectedResult);
  });

  it("should yield the same number when adding zero", () => {
    const numbers = [1, 0];
    const expectedResult = 1;

    const result = add(...numbers);

    expect(result).toBe(expectedResult);
  });

  it("should throw an error when no values are provided", () => {
    const numbers = undefined;

    const result = () => add(...numbers);

    expect(result).toThrow();
  });

  it("should throw an error when adding a number and a string", () => {
    const numbers = [1, "2"];

    const result = () => add(...numbers);

    expect(result).toThrow("All values must be numbers");
    expect(result).toThrow(TypeError);
  });
});
