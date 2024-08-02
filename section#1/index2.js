const fs = require("fs");

const textIn = fs.readFileSync("./test.txt", "utf-8");
console.log(textIn);

const textOut = `this is what we know about the avacado: ${textIn}`;
fs.writeFileSync("./test1.txt", textOut);
