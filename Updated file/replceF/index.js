const fs =require ('fs');
const readline = require("readline");

const writeGreetingToFile = (name) => {
    fs.writeFile("read.txt",'hello,  ${name}!',err => {
if(err){
    console.log("error occur");
}

});

 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("What is your name ? ", function(name) {
    rl.question("Where do you live ? ", function(country) {
        console.log(`${name}, is a citizen of ${country}`);
        rl.close();
        writeGreetingToFile(name);
    });
});
}

/*const fs = require("fs");

fs.writeFileSync("read.txt","welcome to my file");
 
fs.appendFileSync("read.txt","  and read the all input data:)", (err) => {
    console.log("task completed");
});*/