const fs = require("fs");


const ps = require("prompt-sync");
const prompt = ps();


let name = prompt("enter your name");
fs.writeFileSync("write.txt", "${name}");
