import { describe, it, expect } from "vitest";
import { fauxAsync, callbackAsync } from "./asyncTests";

// describe("fauxAsync", () => {
//   // We can use async/await in our tests
//   it("should return foo", async () => {
//     const result = await fauxAsync();

//     expect(result).toBe("foo");
//   });
// });

describe("callbackAsync", () => {
  it("should return foo", async () => {
    const result = await callbackAsync((result) => {
      return result;
    });

    expect(result).toBe("foo");
  });
});
