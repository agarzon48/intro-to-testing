/*
Here we introduce the AAA pattern for writing tests:
1. Arrange: We prepare the data we need for the test.
2. Act: We execute the function we want to test.
3. Assert: We check that the result of the function is what we expect.

This test is easier to read and change than the previous one.
*/

import { it, expect } from "vitest";

import { add } from "./add";

it("should add two numbers", () => {
  // Arrange
  const numbers = [1, 2];
  const expectedResult = 3;

  // Act
  const result = add(...numbers);

  // Assert
  expect(result).toBe(expectedResult);
});
