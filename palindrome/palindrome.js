// Reverse the String and return it
function reverse(string) {
  return Array.from(string.trim())
    .reverse()
    .join("");
}

function isPalindrome(string) {
  // Transforming to lower case first
  string = string.toLowerCase();
  return string === reverse(string);
}

// Exercise returning parts of an email address
function splitMail(mail) {
  mail = String(mail)
    .trim()
    .toLowerCase();
  return mail.split("@");
}

// Moving on with Objects
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  };

  // Preprocess for case insensitive checking for palindromes
  this.processContent = function processContent() {
    return this.processor(this.content);
  };

  // Returns true if the phrase is a palindrome, false otherwise.
  this.isPalindrome = function isPalindrome() {
    return this.processContent() === reverse(this.processContent());
  };

  // Just make it loud
  this.louder = function louder() {
    return this.content.toUpperCase();
  };
}

function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Overide processContent() method to use translation for demo purposes
  this.processContent = function processContent() {
    return this.processor(this.translation);
  };
}

TranslatedPhrase.prototype = new Phrase();
