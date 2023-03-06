const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() encoding tests", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "thinkful";
      const actual = polybius(message);
      const expected = "4432423352125413";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jinx";
      const actual = polybius(message);
      const expected = "42423335";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "Hello world";
      const actual = polybius(message);
      const expected = "3251131343 2543241341";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding tests", () => {
    it("should decode a message by translating each number pair into a letter", () => {
      const message = "3251131343";
      const actual = polybius(message, false);
      const expected = "hello";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4432423352125413";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "3251131343 2543241341";
      const actual = polybius(message, false);
      const expected = "hello world";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "44324233521254134";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
