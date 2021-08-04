var http = require("http");
var sever = http.createServer((req, res)=>{
  res.end("Hello World");
});
sever.listen(3000);