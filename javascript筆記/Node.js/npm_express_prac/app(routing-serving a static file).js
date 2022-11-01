const express = require('express');
const app = express();
//serving a static file
//我們要透過middleware來達成
app.use(express.static("public"));
//上面這行是告訴Node.js 我的資料(static file)放在名為public的檔案當中

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index(form-get).html"); 
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});

