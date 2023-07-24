// First, we need to import the `it` and `expect` functions from `vitest`.
import { it, expect } from "vitest";

// Then, we import the function we want to test.
import { add } from "./add";

// Finally, we write our test.
// `it` and `test` functions are the same. They expect a description of the test
// and the function that will be executed.
it("should add two numbers", () => {
  // `expect` function is used to assert that the result of the function is
  // what we expect.
  expect(add(1, 2)).toBe(3);
});
