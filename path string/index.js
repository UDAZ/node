var path = require("path");
var filepath = "C:\\\\path string\\index.html";

console.log(path.dirname(filepath));
console.log(path.basename(filepath));
console.log(path.extname(filepath));

console.log(path.join("C:\\path string", "index.html"));

console.log(path.normalize("C:\\\\path string\\ib\\..\\index.html"))