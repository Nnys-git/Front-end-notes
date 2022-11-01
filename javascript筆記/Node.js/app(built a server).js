//require內建的module http
const http = require("http");
//透過createServer()建立一個server
//裡面要放一個Callback function(包含兩個parameter: req,res)
const server = http.createServer((req,res)=>{
    //寫上要回應給user的是什麼
    res.write("Hello user.");
    res.end();
    // console.log(req);//會跑出一堆object
    console.log(req.url); // 會跳出/(一條斜線)
    //代表user在做這個請求時他的網址是空的
    //事實上http://localhost:3501/ 最後面有一條斜線的
    //但因為所有網站都有，大家都省略掉
});
//透過3501 port 聆聽3501給他的一個任何的request
//第一個parameter放port號碼，第二個parameter放收到請求時要幹嘛
server.listen(3501, ()=>{
    console.log("Server 3501 is on port!!")
});
//這個lisetn函數，在CMD Node上執行的時候，他會跳出
//Server 3501 is on port!! 你剛剛打的log 並且不斷的聆聽
//按著CTRL +C 可以停止伺服器
//來自3501的請求
//可以用自己的瀏覽器http://localhost:3501/
//打開來驗證看看