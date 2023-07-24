import { describe, expect, it, vi } from "vitest";
import logRequest, { logData } from "./spies";
import { promises as fs } from "fs";

describe("logRequest", () => {
  // This test will work, but it will create a file in the log directory.
  it("should write the request to a file", async () => {
    const request = "This is a test request";
    expect(await logRequest(request)).toBeUndefined();
  });
});

vi.mock("fs"); // This will replace the modules functions with spies.

describe("logRequest", () => {
  // This test will not write a file anymore, since fs has been replaced with a mock.
  it("should write the request to a file", async () => {
    const request = "This is a test request";
    expect(await logRequest(request)).toBeUndefined();
  });

  it("should call the fs module", async () => {
    const request = "This is a test request";
    await logRequest(request);

    expect(fs.writeFile).toBeCalled();
  });
});

describe("logData with spies", () => {
  it("should write the request to a file", async () => {
    const request = "This is another test request";
    const logger = vi.fn();

    logData(logger, request);

    expect(logger).toHaveBeenCalledWith(request);
  });
});
