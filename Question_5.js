var fs = require('fs');

var text = fs.readFileSync('text2.txt', 'utf8');

 var arr = text.split(" ");

var search = 'John';

let count = 0;

 for(i=0;i<arr.length;i++){

   if(arr[i]===search){
     count++;

   }

 }
 console.log(count);