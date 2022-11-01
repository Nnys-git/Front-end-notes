//Node.js 常見的內建module> path
// let path = require("path");
//path.join用來將名稱串接

// console.log(path.join(__dirname,"try.js"))
//C:\Users\林哲緯\Desktop\【前端資料\javascript筆記\Node.js\try.js


//Node.js 常見的內建module> url

const url = require('url');
const google = "https://www.google.com.tw/?hl=zh_TW"

const parsedURL = url.parse(google, true);
console.log(parsedURL.host);//不會顯示port 192.168.0.0.1
console.log(parsedURL.hostname);//會顯示port   192.168.0.0.1:8080
console.log(parsedURL.pathname);//  /
console.log(parsedURL.path);//  /?hl=zh_TW
console.log(parsedURL.query);//  [Object: null prototype] { hl: 'zh_TW' }