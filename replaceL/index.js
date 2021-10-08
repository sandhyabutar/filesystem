const ps = require("prompt-sync");
const prompt = ps();

//var sentence = prompt("Enter the sentence");
var x = prompt("enter string");
var a = prompt("replce");
console.log(x.replace("${x}","${a}"));