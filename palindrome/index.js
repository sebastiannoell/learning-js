// module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    let letters = string.toLowerCase().split(""); // convert string to Array
    letters = letters.filter(letter => letter.match(/([a-z])+/g)); // filter out all special chars, A-Z only.
    let result = letters.join("");
    return result;
  };

  // Preprocess for case insensitive checking for palindromes
  this.processContent = function processContent() {
  return this.processor(this.content);
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.isPalindrome = function isPalindrome() {
    return this.processContent() === this.processContent().reverse();
  };
}

