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
