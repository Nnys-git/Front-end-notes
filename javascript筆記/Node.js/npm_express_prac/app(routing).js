//routing in express 
const express = require('express');
const app = express();

//這段叫做request handling(透過express().get()處理不同的請求)
//這段都不打的話，會看到Cannot GET / 意思是瀏覽器找不到首頁
//handle different request 

app.get('/', (req, res) => {
  res.send('You are on homepage!')
});

//透過下面這些不同的網址(user點到的不同連結)達成網頁伺服器的基本做法!! 
app.get("/johnny",(req,res)=>{ //http://localhost:3000/johnny 連過去就會回傳send的內容!
  res.send("this is JSohnny's page.");
});

app.get("/tom",(req,res)=>{ //http://localhost:3000/tom 連過去就會回傳send的內容!
  res.send("this is Tom's page.");
});
//以上作法是user乖乖打上你要的網址，會回傳你想給他看的東西
//但是，user如果網址打呢?  這時候就需要一個error page 告知user 你的請求不存在!

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});
