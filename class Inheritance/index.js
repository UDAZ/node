/*
var Car = class {
  constructor(name) {
    this.name = name;
  }
  drive() {
    console.log("zoom zoom ...");
  }
};

var Lamborghini = class extends Car {
  constructor(name) {
    super(name);
  }

  echo() {
    super.drive();
  }
  drive() {
    console.log(`fire ${this.name}`);
  }
}

var car = new Lamborghini("lambo");
car.echo();
car.drive();
*/

var util = require("util");

// 親クラスの定義
var Car = function (name) {
  this.name = name;
};

Car.prototype.drive = function () {
  console.log("zoom zoom ...");
};

// 子クラスの定義
var Lamborghini = function (name) {
  Lamborghini.super_.call(this, name);
};
util.inherits(Lamborghini, Car);

Lamborghini.prototype.echo = function () {
  Lamborghini.super_.prototype.drive.call(this);
};

Lamborghini.prototype.drive = function () {
  console.log(`fire ${this.name}`);
};


// 実行
var car = new Lamborghini("lamborghini");
car.echo();
car.drive();
