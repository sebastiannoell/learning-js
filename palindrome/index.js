module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  };

  // Preprocess for case insensitive checking for palindromes
  this.processContent = function processContent() {
  //  return this.processor(this.content);
  return this.content;
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.isPalindrome = function isPalindrome() {
    return this.processContent() === this.processContent().reverse();
  };
}

