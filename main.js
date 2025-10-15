import fs from "fs";
const data = fs.readFileSync("data.txt", "utf8");
const index = data.indexOf("bananas are for monkeys");
console.log(index);
