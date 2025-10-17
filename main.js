import fs from "fs";

const words = (file) => {
  const data = fs.readFileSync(file, "utf8");
  const index = data.indexOf("bananas are for monkeys");
  return index;
};
console.log(words(`data.txt`));

const ionEnd = (ion, ending) => {
  const words = fs.readFileSync(ion, "utf8");
  const ionWords = new RegExp(`\\b[\\w'-]*${ending}\\b`, "gi");

  const allMatchWOrds = words.match(ionWords);
  return allMatchWOrds;
};
console.log(ionEnd(`data.txt`, `ion`));
const reStart = (re, start) => {
  const words = fs.readFileSync(re, "utf8");
  const reWords = new RegExp(`\\b${start}[\\w'-]*\\b`, "gi");

  const allMatchWOrds = words.match(reWords);
  return allMatchWOrds;
};
console.log(reStart(`data.txt`, `re`));
