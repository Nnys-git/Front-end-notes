const express = require('express');
const app = express();
const bodyParser = require("body-parser");
//要使用body-parser還必須設定一個middleware
//middleware: 不論收到什麼樣的請求(get,post...)都一定會執行的程式【下方app.use()】
app.use(bodyParser.urlencoded({extended:true}));
app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html"); //首先當然要先把首頁透過sendFile()給user看
});
//再來就可以設定收到HTML form tag來的post請求的時候CallBack function 要寫什麼
//routing for query 
app.post("/formHandling",(req,res)=>{
  console.log(req.body);  // { fullname: 'BBA', age: '30000' } 
  //這邊的 req.body會收到 form tag 裡面input property裡有name的value(如上object)
  let{fullname,age} = req.body;
  //這邊一樣透過destructing object將要抓的property名稱寫在前面大括弧，後面assign給剛剛的object(user輸入的資料)
  res.send(`Thank you for posting
  Your name is ${fullname},
  Your name is ${age},
  `);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});

