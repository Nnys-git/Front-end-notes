//要接別的JS exports的東西，必須要用一個變數去接起來(有點像是接return)
//接的方式就是require("{剛剛有exports東西的JS檔檔名}"); <--不用加副檔名
// let try1 = require("./try1"); 
// console.log(try1) //這邊就會log出try1.js剛剛exports的東西
//當然try1同時exports多個function時，這邊也可以一次抓全部的!
//因為這邊require是針對檔名，只要他有exports 這邊require就能用

//require完之後就可以直接在這個js中調用其他js exports的東西
// let myName = "Johnny";
// try1.sayNight(myName); //Good night Johnny
// try1.sayHi(myName);// Hello! Johnny

// let try2 =require("./try2");
// console.log(try2);
// try2.sayMorning(myName);


//要一口氣抓資料夾的js檔exports出的東西
//先require開始

let greet = require("./greeting");
console.log(greet)
/**這邊會直接對資料夾require,能找到三個property的原因是
 * Node在require一整個料夾的時候，會去找index.js
 * 並且去找index.js有exports的東西抓過來用
 * {
    sayHi: [Function: sayHi],
    sayNight: [Function: night],
    sayMorning: [Function: morning]
  }
   */