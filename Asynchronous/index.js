const fs =require("fs");

// fs.writeFile("read.txt","today is awesome day :)",
// (err) =>{
  //  console.log("files is created");
   // console.log(err);

   // });
   fs.appendFile("read.txt","pls know about my efforts :)",
   (err) => {
    console.log("task completed");

   });
 
const buf_data = fs.readFileSync("read.txt");
//console.log(buf_data);
//buffer is mainly used to binary data.

org_data = buf_data.toString();
console.log(org_data);
