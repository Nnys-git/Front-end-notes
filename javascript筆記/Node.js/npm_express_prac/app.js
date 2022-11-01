//先require express這個module 
const express = require('express');
//之前我們用variable接require的module 回傳的結果都是一個object
console.log(typeof express);//神奇的是這邊typeof express居然是一個function!!
/**這邊為什麼可以加上() 好像是function一樣呢?
那是因為express他原始的寫法就直接將一個function 做exports
【原本exports寫法:
function sayHi(){ console.log("Hi"); }
module.exports.sayHi = sayHi;
*但如果你的js要exports的只有一個function可以把exports改寫成
module.exports = sayHi;
這樣一來require的時候就會是function
而express 這個module就是這個樣子!!!!
】*/
//約定成俗潛規則: 會把express function叫做app 
const app = express();



//get() 第一個parameter是"網址"；第二個是Callback function(包含兩個parameter: req,res)

app.get('/', (req, res) => {
  res.send('You are on homepage!')
})

//listen() 第一個parameter是port號；第二個是CallBack function(執行時要幹嘛) 
app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});

