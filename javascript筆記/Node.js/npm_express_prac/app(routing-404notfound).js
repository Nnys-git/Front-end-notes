const express = require('express');
const app = express();
app.use(express.static("public"));


app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index(form-get).html"); 
  console.log(res.statusCode);
});
//我們透過routing for all來處理404 not found問題
app.get("*",(req,res)=>{ 
  //get打*的話，使用者如果亂打網址在後面，就會一律指向這個頁面
  //也就是所謂的error page
  //【記得routing for all一定要放在最下面的handling，不然所有頁面都會是error page了....】
  res.status(404);
  console.log(res.statusCode);
  res.send("Can't find what you want")
});




app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});

