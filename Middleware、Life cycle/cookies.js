const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cookieParser =require("cookie-parser");
app.use(cookieParser("i'm Johnny so handsome")); 
//你在cookie-parser裡面打入的String會被用來製作Signed cookies! 
app.set("view engine", "ejs");
app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/exampleDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //mongoose.connect()執行成功，回報執行成功
    console.log("Connected to mongoDB.");
  })
  .catch((err) => {
    //mongoose.connect()執行失敗，回報執行失敗，並且印出錯誤訊息
    console.log("Connection Failed.");
    console.log(err);
  });

// app.get("/",(req,res)=>{
//   res.cookie("name","Johnny");
//   res.send("Welcome to Homepage!")
// });
  
// app.get("/",(req,res)=>{
//   console.log(req.cookies);
//   res.send(`歡迎回來${req.cookies.name} Welcome to Homepage!`)
// });              

//製作signed cookies
app.get("/getSignedCookies",(req,res)=>{
  res.cookie("address","Taipei",{signed:true});
  //要送給user的cookie 除了key,value之外，還要再加入第三個parameter{signed:true}
  //這樣cookie-parser才會知道要對這個cookie做簽名
  res.send("Cookie has been send!");
});

//把簽過名的cookies拿回來:
// app.get("/",(req,res)=>{
//   console.log(req.cookies);//只有打cookies會找到剛剛送過去的signed cookie
//   console.log(req.signedCookies); //要這樣打才會log出有簽名的cookie
//   //注意:如果是原本送過去的value會完整地被送回來
//   //但如果回來的結果是undefined 那就代表儲存在user那邊的cookie被改過了!
//   // res.send(`歡迎回來${req.cookies.name} Welcome to Homepage!`)
// });    



app.get("/*", (req, res) => {
  res.status(404).send("404 NOT FOUND!");
});

//error handler
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send("Something goes wrong. We'll fix it soon!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
