var http = require("http");
var url = "http://localhost:3000";
var data = "Hello World!";

var options = {
  method: "POST",
  headers:{
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(data)
  }
};
var req = http.request(url, options, (res)=>{
  res.pipe(process.stdout);
});
req.on("error", (err)=>{
  console.log(err.message);
});
req.end(data);