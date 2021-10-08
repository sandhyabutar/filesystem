const fs = require("fs");

fs.writeFileSync("read.txt","welcome to my file");
 
fs.appendFileSync("read.txt","  and read the all input data:)", (err) => {
    console.log("task completed");
});
//fs.writeFileSync("read.txt","Best thing in this world to imporve yourself");


//fs.appendFileSync("read.txt","So don't waste your time ,improve your skills");

const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);
//buffer is mainly used to binary data.

org_data = buf_data.toString();
console.log(org_data);


//const buf_data = fs.writeFileSync("read.txt");
//console.log(buf_data);


//org_data = buf_data.toString();
//console.log(fs.writeFileSync("read.txt",org_data));

