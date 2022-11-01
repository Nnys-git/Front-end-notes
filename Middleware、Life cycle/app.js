const express = require("express");
const app = express();
const mongoose = require("mongoose");

const studentMiddleware = (req,res,next)=>{
  console.log("This is student route.");
  next();
}

const anotherMiddleware = (req,res,next)=>{
  console.log("This is second route.");
  next();
}

app.set("view engine", "ejs");
// middlewares
app.use(express.static("public"));
//設定一個自己的middlewares
// app.use((req,res,next)=>{
//   console.log("Hello middleware");
//   // console.log(req.method);//get
//   // res.send("Hello User!");//你這邊給他先送一次send()之後，下面的handler再send()一次
//   //這樣是不行的! 處理一個request只能送一個res回去!!!
//   //錯誤:Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//   next();
// });
// app.use("/student",(req,res,next)=>{ //middle也可以設定route, 只有在這個route執行前這個middleware才會啟用
//   console.log("We reach middleware in /student route");
//   next();
// });

app.get("/", (req, res) => {
  res.send("Home page.");
});

// 你也可以將middle ware鑲進route裡面，但基本沒人這麼做會看不懂code
// app.get(
//   "/student",
//   (req, res, next) => {
//     console.log("This is student route.");
//     next();
//   },
//   (req, res) => {
//     res.send("This is‵ student page.");
//   }
// );

//將middle ware鑲進route裡面這麼做比較好
app.get(
  "/student",
  studentMiddleware,anotherMiddleware,//妳可以串一大堆middleware進去, 通通會執行
  (req, res) => {
    res.send("This is student page.");
  }
);

// mongoose
//   .connect("mongodb://localhost:27017/test", {
//     useFindAndModify: false,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to mongodb.");
//   })
//   .catch((e) => {
//     console.log(e);
//   });

app.listen(3000, () => {
  console.log("Server running on port 3000.");
});
