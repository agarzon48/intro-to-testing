// This is a classic example in testing
export const add = (...numbers) => {
  if (!numbers) throw new Error("No values provided");
  if (numbers.some((number) => typeof number !== "number"))
    throw new TypeError("All values must be numbers");

  return numbers.reduce((a, b) => a + b, 0);
};
