const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname+"/index.html");
});

app.get("/johnny",(req,res)=>{ 
  res.send("this is Johnny's page.");
});

app.get("/tom",(req,res)=>{
  res.send("this is Tom's page.");
});

//routing for all
// app.get("*",(req,res)=>{ 
//   //get打*的話，使用者如果亂打網址在後面，就會一律指向這個頁面
//   //也就是所謂的error page
//   //【記得routing for all一定要放在最下面的handling，不然所有頁面都會是error page了....】
//   res.send("Can't find what you want")
// });

//routing for pattern 
app.get("/:fruit/:someFruit",(req,res)=>{ 
    //"/fruit/:someFruit" 這邊在someFruit 前面加上冒號
    //代表這個值(someFruit)會被當作一個object key來儲存
    //使用者在/fruit/後面不管打上什麼字，都會被存取成一個object
    //裡面有名為someFruit的property {someFruit:'banana'}
    // console.log(req.params);  //在FRUIT前面也加上: 回傳值就會是{ fruit: 'fruit', someFruit: 'WEWE' }
    // console.log(req.params.fruit); //這樣可以直接抓到使用者填的資料
    // console.log(req.params.someFruit);//這樣可以直接抓到使用者填的資料
    // 只要你在get的route(連結)有對兩個文字打上冒號，那兩個文字就會成為object中的 key
    // value就由使用者決定 
    let {fruit,someFruit} = req.params; //你也可以用object destruction的方式來寫(可以一次寫多個key上去抓)
    console.log(req.params);//
    console.log(someFruit);//
    console.log(fruit);
    res.send("You are looking for fruit.")
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000.");
});

/**
 *    //destructing object 複習
     let Johnny = {
      name:"Johnny Lin",
      age:30,
      gender:"Male",
      address:"Taipei, Taiwan",
      height:178,
      weight:80,
      friends:{
        fullName:"Tom Lin"
      }
     }

    // 新的寫法let 後面放大括號{} 大括號裡面放要抓的property name
    // 後面等號寫上object名稱
    let {name,gender} = Johnny;
    // 如果你要抓下一層的property，object後掛上一層的property名.
    let {fullName} = Johnny.friends;
    console.log(name,gender,fullName);
 */