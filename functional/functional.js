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
const baseUrl = "https://js.test/"

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

let urls = bundeslaender.map(land => baseUrl+urlify(land));
console.log(urls);