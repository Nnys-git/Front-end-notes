//require內建的module http
const http = require("http");
const url = require("url");

const server = http.createServer((req,res)=>{
    let parsedURL = url.parse(req.url);
    if(req.url == "/"){
        //要在response裡面寫html的程式碼，要先打下面這行writeHead
        res.writeHead(200,{'constent-Type':'text/html'});
        //有了writeHead設定，write裡面就可以寫HTML Tag了
        res.write("<h1>Hi you are on the homepage!</h1>");
        res.write("<p>dsdsdawefdsfsgfvdfsvscsxe</p>")
        res.end();
    } else {
    res.write("Hello"+parsedURL.pathname);
    res.end();
    console.log(req.url); 
}
});

server.listen(3501,()=>{
    console.log("Server 3501 is on port!!")
});
