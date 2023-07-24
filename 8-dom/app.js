const root = document.querySelector("#root");

export const createParagraph = ({ text, parent }) => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = text;
  parent.append(newParagraph);
};

// createParagraph({ text: "Hello World", parent: root });

export const creatorButton = ({ text, parent }) => {
  const newButton = document.createElement("button");
  newButton.textContent = "Add paragraph!";
  newButton.id = "add-paragraph";
  newButton.addEventListener("click", () => {
    createParagraph({ text, parent });
  });
  parent.append(newButton);
};
