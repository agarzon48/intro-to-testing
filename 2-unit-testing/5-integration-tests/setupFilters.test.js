import { describe, it, expect } from "vitest";

import {
  setupFilters,
  areFiltersArray,
  areFiltersEmpty,
  areFiltersForbidden,
  createUrlFromValidFilters,
} from "./setupFilters";

const nonArrayFilters = "not an array";
const emptyFilters = [];
const forbiddenFilters = ["forbidden"];
const filters = [{ key: "value" }];
const filters2 = [{ key: "value" }, { key2: "value2" }];
const filtersWithForbidden = [{ key: "value" }, { forbidden: "value" }];
const baseUrl = "baseUrl";

// Unit tests suite
describe("areFiltersArray", () => {
  it('should throw a "TypeError" if filters is not an array', () => {
    const result = () => areFiltersArray(nonArrayFilters);

    expect(result).toThrow(TypeError);
  });

  it("should not throw if filters is an array", () => {
    const arrayFilters = [];

    const result = () => areFiltersArray(arrayFilters);

    expect(result).not.toThrow();
  });
});

// Unit tests suite
describe("areFiltersEmpty", () => {
  it('should throw an "Error" if filters is an empty array', () => {
    const result = () => areFiltersEmpty(emptyFilters);

    expect(result).toThrow(Error);
  });

  it("should not throw if filters is not an empty array", () => {
    const result = () => areFiltersEmpty(filters);

    expect(result).not.toThrow();
  });
});

// Unit tests suite
describe("areFiltersForbidden", () => {
  it("should throw if filters contains a forbidden filter", () => {
    const result = () =>
      areFiltersForbidden(filtersWithForbidden, forbiddenFilters);

    expect(result).toThrow(Error);
  });
});

// Unit tests suite
describe("createUrlFromValidFilters", () => {
  it("should return a valid url if filters is an array of objects", () => {
    const result = createUrlFromValidFilters(baseUrl, filters);
    const result2 = createUrlFromValidFilters(baseUrl, filters2);

    expect(result).toBe("baseUrl?key=value");
    expect(result2).toBe("baseUrl?key=value&key2=value2");
  });
});

// Integration tests suite
describe("setupFilters", () => {
  it('should throw a "TypeError" if filters is not an array', () => {
    const result = () =>
      setupFilters(baseUrl, nonArrayFilters, forbiddenFilters);

    expect(result).toThrow(TypeError);
  });

  it('should throw an "Error" if filters is an empty array', () => {
    const result = () => setupFilters(baseUrl, emptyFilters, forbiddenFilters);

    expect(result).toThrow(Error);
  });

  it("should throw if filters contains a forbidden filter", () => {
    const result = () =>
      setupFilters(baseUrl, filtersWithForbidden, forbiddenFilters);

    expect(result).toThrow(Error);
  });

  it("should return a valid url if filters is an array of allowed objects", () => {
    const result = setupFilters(baseUrl, filters, forbiddenFilters);
    const result2 = setupFilters(baseUrl, filters2, forbiddenFilters);

    expect(result).toBe("baseUrl?key=value");
    expect(result2).toBe("baseUrl?key=value&key2=value2");
  });
});
