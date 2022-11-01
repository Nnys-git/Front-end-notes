const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const fs = require("fs");



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

//validator
const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    //對name設定validator
    //required 是指必填
    required: [true, "You have to enter the name!"],
    maxlength: [15, "Name is too long!"],
  },
  age: {
    type: Number,
    required: true,
    default: 3,
    min: 0,
    max: 50,
  },
  mood: {
    type: String,
    enum: ["High", "Normal", "Low"],
    //在這邊設定enum可以限制這個string user在輸入時必須為"enum列舉中"的這幾個項目
    default: "undecided",
  },
  food: {
    style: { type: Number, defalut: 0 },
    feed_times: { type: Number, default: 0 },
  },
});

//define middle ware
dogSchema.pre("save",async function(){
  fs.writeFile("record.txt","One data is trying to be save",(e)=>{
    if(e)throw e;
  })
});

dogSchema.post("save",async function(){
  fs.writeFile("record.txt","One data has been saved",(e)=>{
    if(e)throw e;
    //注意 fs.writeFile()這個函數會將文件複寫，所以你如果是要用來記錄留存建議不要用這個
  })
});
//pre("save")指的是你在執行save()之前要做的事情是什麼
//而這個pre middleware一樣是建立在schema上-->>代表要讓Schema這個大object都要有這個middleware功能
const Dog = mongoose.model("Dog",dogSchema);
const NewDog = new Dog({name:"HappyBubba",mood:"High",age:7,"food.style":2});

NewDog.save().then((msg)=>{
  console.log(msg);
}).catch((err)=>{
  console.log(err);
})

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
  console.log("Welcome to homepage");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
