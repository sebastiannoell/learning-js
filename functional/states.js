const bundeslaender = [
  "Baden-Württemberg",
  "Bayern",
  "Berlin",
  "Brandenburg",
  "Bremen",
  "Hamburg",
  "Hessen",
  "Rheinland-Pfalz",
  "Mecklenburg-Vorpommern",
  "Niedersachsen",
  "Nordrhein-Westfalen",
  "Saarland",
  "Sachsen",
  "Sachsen-Anhalt",
  "Schleswig-Holstein",
  "Thüringen"
];
const baseUrl = "https://js.test/";

function urlify(string) {
  return string
    .trim()
    .toLowerCase()
    .replace(/\u00fc/g, "ue") // ü
    .replace(/\u00e4/g, "ae") // ä
    .replace(/\u00d6/g, "oe") // ö
    .replace(/\u00df/g, "ss") // ß
    .split(/\s/g)
    .join("-");
}
// urlify every Bundesland
let laenderSlugs = bundeslaender.map(land => urlify(land));

// Concat with baseURL
let laenderUrls = laenderSlugs.map(land => baseUrl + land);

// Filter only Länder with dashes
let laenderWithDashes = laenderSlugs.filter(
  land => land.split("-").length === 2
);

/* Alternative as imperative Function 
    function imperativeSingles(elements) {
      let singles = [];
      elements.forEach(function(element) {
        if (element.split("-").length === 1) {
          singles.push(element);
        }
      });
      return singles;
    }
    */

// Filter Länder with `Sachsen` in it
let laenderSachsen = laenderSlugs.filter(land => land.includes("sachsen"));

console.log("Länder: ", bundeslaender);
console.log("Länderslugs: ", laenderSlugs);
console.log("Länder mit Bindestrichen: ", laenderWithDashes);
console.log("Länder mit Sachsen: ", laenderSachsen);
console.log("URLs: ", laenderUrls);

// Example 2 reducing
// Getting the length of every String in our array.

// Imperative solution:
function imperativeLengths(array) {
  let lengths = new Object();
  array.forEach(el => (lengths[el] = el.length));
  return lengths;
}
console.log("Längen: ", imperativeLengths(bundeslaender));

// Functional solution:
function functionalLength(array) {
  return array.reduce((lengths, land) => {
    lengths[land] = land.length;
    return lengths;
  }, {});
}
console.log("Längen functional: ", functionalLength(bundeslaender));
