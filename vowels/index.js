const ps = require("prompt-sync");
const prompt = ps();

var sentence = prompt("Enter the sentence");

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

var output = convert(sentence);
console.log("Result is ", output);