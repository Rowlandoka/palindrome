let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function () {
  describe("#palindrome", function () {
    it("should return false for a non-palindrome", function () {
      let nonPalindrome = new Phrase("foobar");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a plain palindrome", function () {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", function () {
      let combinedCase = new Phrase("RaceCar");
      assert(combinedCase.palindrome());
    });

    it("should return true for a palindrome with punctuation", function () {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });

    it("should return false for an empty string", function () {
      let emptyPhrase = new Phrase("");
      assert(!emptyPhrase.palindrome());
    });
  });
});
