setTimeout(() => {
  console.log("setTimeout()を呼び出しました。");
}, 100);

console.log("global");

var end = (new Date()).getTime() + 3000;
while ((new Date()).getTime() < end) { }
// 遅延実行のためsetTimeoutが待たされる
// global →　while → setTimeout
// 100ms 待っている間に whileが開始され、3ms 待たされる