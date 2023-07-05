import { it, expect } from "vitest";

import { add } from "./add";

it("should add two numbers", () => {
  // Arrange
  const numbers = [1, 2]; // Simple tests!
  const expectedResult = 3;

  // Act
  const result = add(...numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

// Multiple tests!
it("should yield the same number when adding zero", () => {
  // Arrange
  const numbers = [1, 0];
  const expectedResult = 1;

  // Act
  const result = add(...numbers);

  // Assert
  expect(result).toBe(expectedResult);
});

it("should return a string when adding a number and a string", () => {
  // Arrange
  const numbers = [1, "2"];
  const expectedResult = "12";

  // Act
  const result = add(...numbers);

  // Assert
  expect(result).toBe(expectedResult);
});
