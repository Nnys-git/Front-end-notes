const express = require('express');
const app = express();
//【http request來的是get的時候，就不需要用到bodyParser這種東西，當然middleware也不需要!!】

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index(form-get).html"); 
});

//再來就可以設定收到HTML form tag來的get請求的時候CallBack function 要寫什麼
//routing for query 
app.get("/formHandling",(req,res)=>{
  console.log(req.query);  // 與post request不同的是，這邊抓資料用的是req.query! 
  let{fullname,age} = req.query;
  //這邊一樣透過destructing object將要抓的property名稱寫在前面大括弧，後面assign給剛剛的object(user輸入的資料)
  res.send(`Thank you for posting
  Your name is ${fullname},
  Your name is ${age},
  `);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});

