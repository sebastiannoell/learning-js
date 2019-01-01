// Learning the forEach method on arrays

let bestArrayEver = ["Sebi", "Sandra", "Toni", "Fred", 2];
let soliloquy = "To be, or not to be, that is the question:";

bestArrayEver.forEach(function(e) {
  console.log(e);
});

// Exercise with fat arrow, i like
bestArrayEver.forEach((e) => {
  console.log(e);
})

Array.from(soliloquy).forEach(function(char) {
  console.log(char);
});
