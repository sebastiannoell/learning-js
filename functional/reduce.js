// Example 1
// reduce vs imperative
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Imperative approach
function sumOfElements(array) {
  let total = 0;
  array.forEach(element => {
    return (total += element);
  });
  return total;
}
// reduce alternative
let totalAlt = numbers.reduce((total, el) => total += el, 0); // 0 is default init for total

console.log("Ergebnis: ", sumOfElements(numbers));
console.log("Ergebnis mit reduce(): ", totalAlt);

// Example 2
