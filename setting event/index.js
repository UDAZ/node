var EventEmitter = require("events");
var ee = new EventEmitter();
/*
var ontick = function(){
  console.log("event is called");
  // ee.off("event", ontick);
  
};
*/
// ee.on("event", ontick);
// ee.once("event", ontick);
// ee.emit("event");

ee.on("event", function(){
  console.log("function : \r\n", this);
});
ee.on("event", () => {
  console.log("arrow : \r\n", this);
});
ee.emit("event");

