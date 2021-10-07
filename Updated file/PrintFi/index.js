const fs = require("fs");

fs.writeFileSync("read.txt","welcome to my file");
 
fs.appendFileSync("read.txt","  and read the all input data:)", (err) => {
    console.log("task completed");
});


const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);
//buffer is mainly used to binary data.

org_data = buf_data.toString();
console.log(org_data);