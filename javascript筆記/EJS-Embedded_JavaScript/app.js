const express = require("express");
const app = express();
const ejs = require("ejs");

app.use(express.static("public"));

//handling array 
app.get("/",(req,res)=>{
    //database => an array of objects
    const lang =[ //假定我們從資料庫收到的資訊是這種array like object的時候
        {name:"Python",rating:9.5,popularity:9.7,trending:"super hot"},
        {name:"Java",rating:8.6,popularity:8.2,trending:"same"},
        {name:"C++",rating:6.6,popularity:7.7,trending:"same"},
        {name:"PHP",rating:2.5,popularity:4.7,trending:"decreasing"},
        {name:"JavaScript",rating:8.5,popularity:8.1,trending:"same"},
    ];    
    res.render("index.ejs",{lang:lang});
});

app.listen(3000,()=>{
    console.log('Server is running on 3000 port');
})