const express = require("express");
const app = express();
const mongoose = require("mongoose");
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

const monkeySchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 5,
  },
});

const Monkey = mongoose.model("Monkey", monkeySchema);

app.get("/", async(req, res, next) => {
  try {
    await Monkey.findOneAndUpdate(
      { name: "Tom.Lorem" }, //filter
      { name: "Tommy.Lorem"}, //change things
      { new: true, runValidators: true }, //options 記得要runvalidators
      (err,doc)=>{ //再額外放第四參數(err,doc)=>{}用來error handler
        if(err){ //如果出錯
            res.send(err); //印出錯誤訊息
        } else {
            res.send(doc); //印出修改的object內容
        }
      }
    );
  } catch (e) {
    next(e);
  }
});

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
