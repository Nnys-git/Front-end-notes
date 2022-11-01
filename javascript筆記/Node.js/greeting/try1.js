function night(name){
console.log("Good night "+name);
}


//要建立try1.js、try2.js、app.js三者的關係的話
//先了解module是啥，他是一個很大的object
//裡面包含了exports這個空的object
// console.log(module);

//開始建立三者關係，把night丟出去 
//.exports.({exports name})= function name
module.exports.sayNight = night; //這邊後面寫的night指的就是上面declare的 function
// console.log(module.exports);//{ sayNight: [Function: night] } 
//log就會看到剛剛exports的函數被放進modules裡了
function sayHi(name){
    console.log("Hello! "+name);
}
module.exports.sayHi =sayHi;
//你可以一次exports複數個東西，require會通通都接到!!