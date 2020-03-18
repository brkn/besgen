import { generateSentence } from "../src";

describe("generateSentence", () => {
  it("should return a string", () => {
    const result = generateSentence();

    expect(result).toBeTruthy();
  });
});
