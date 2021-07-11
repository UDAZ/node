var { echo, area } = require("./methods");
var Lamborgini = require("./lamborgini");
var config = require("./config");
echo("Hello world !");
echo(area(10, 10));

var car = new Lamborgini("lamborghini");
car.echo();
car.drive();

console.log(JSON.stringify(config));