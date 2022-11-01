//require內建的module http
const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req,res)=>{
    let parsedURL = url.parse(req.url);
    if(req.url == "/"){
        fs.readFile(path.join(__dirname,"index.html"),(err,data)=>{
            res.writeHead(200,{'Content-Type':'text/html'});
            res.write(data);
            res.end();
        });
    } else {
    res.write("Hello"+parsedURL.pathname);
    res.end();
    console.log(req.url); 
}
});

server.listen(3501,()=>{
    console.log("Server 3501 is on port!!")
});
