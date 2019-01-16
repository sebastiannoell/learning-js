let assert = require("assert");
let Phrase = require("../index.js");

describe("Phrase", function() {

  describe("#palindrome", function() {
  
    it("should return false for a non-palindrome", function() {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.isPalindrome());
    });
    
    it("should return true for a plain palindrome", function() {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.isPalindrome());
    });
    
    it("should return true for a mixed-case palindrome", function() {
      let mixedPalindrome = new Phrase("RaceCar");
      assert(mixedPalindrome.isPalindrome());
    });

    it("should return true for a palindrome with punctuation", function() {
      let punctuationPalindrome = new Phrase("Racing, gnicaR");
      assert(punctuationPalindrome.isPalindrome());
    });
  });

});

