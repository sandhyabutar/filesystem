const fs =require ('fs');
const readline = require("readline");

const writeGreetingToFile = (st) => {
    fs.writeFile("read.txt",'hello,  ${output}!',err => {
        if(err){
        console.log("files is created");
        console.log(err);
     }
        });
    }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("write the Input String ? ", function(st) {


function convert(s){
 var a = s.split('');
 for( var i=0 ; i<a.length ; i++)
 {
  // if (a[i] == "a" || a[i] == "e" || a[i] == "i" || a[i] == "o" || a[i] == "u"){
    if(a[i]=="a"){
       
        a[i] = a[i].toUpperCase();
    }
   
    else if(a[i]=="e"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="i"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="o"){
        a[i] = a[i].toUpperCase();
    }
    else if(a[i]=="u"){
        a[i] = a[i].toUpperCase();
    }
    else{
        a[i] = a[i].toLowerCase();
    }
  }
  var b = a.join('');
  return b;
 }

 var output = convert(st);
console.log("Result is ", output);
rl.close();

writeGreetingToFile(st);

});

