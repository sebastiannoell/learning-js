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
  mail = String(mail).trim().toLowerCase();
  return mail.split("@");
}
