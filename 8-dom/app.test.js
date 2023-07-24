// @vitest-environment happy-dom
import fs from "fs";
import path from "path";

import { describe, it, expect, vi, beforeAll } from "vitest";
import { Window } from "happy-dom";
import useEvent from "@testing-library/user-event";

import { createParagraph, creatorButton } from "./app.js";

const htmlPath = path.join(__dirname, "index.html");
const htmlDoc = fs.readFileSync(htmlPath, "utf8");

const window = new Window();
const document = window.document;
document.write(htmlDoc);
vi.stubGlobal("document", document);

beforeAll(() => {
  const root = document.querySelector("#root");
  createParagraph({ text: "Hello World", parent: root });
  creatorButton({ text: "Hello World", parent: root });
});

describe("createParagraph", () => {
  it("should initialize with 'Hello World' paragraph and a button", () => {
    const helloWorldParagraph = document.querySelector("p");
    const root = document.querySelector("#root");

    expect(helloWorldParagraph.textContent).toBe("Hello World");
    expect(root.children.length).toBe(2);
  });

  it("should add a new paragraph", () => {
    const root = document.querySelector("#root");
    createParagraph({ text: "Hello World", parent: root });
    const paragraphs = document.querySelectorAll("p");
    const paragraphsLength = paragraphs.length;
    const expectedLength = 2;

    expect(paragraphsLength).toBe(expectedLength);
  });

  it("should have a creator button", async () => {
    const user = useEvent.setup();
    const button = document.querySelector("#add-paragraph");
    await user.click(button);

    const paragraphs = document.querySelectorAll("p");
    const paragraphsLength = paragraphs.length;
    const expectedLength = 3;

    expect(paragraphsLength).toBe(expectedLength);
  });
});
