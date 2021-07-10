setTimeout(() => {
  console.log("setTimeout()");
}, 100);

setImmediate(() => {
  console.log("setImmediate()");
});

process.nextTick(() => {
  console.log("nextTick()");
});

Promise.resolve().then(() => {
  console.log("Promise.resolve().then()")
});

// set系はフェーズ群、nextTickとPromiseはキュー群。
// 処理順番的にキューの方が先に始まるのでこの実行結果になる。
// フェーズのループ処理があり1ms以内に処理できないため、setTimeoutを1msにするとsetTimeoutの方が先になる。
// 処理速度にばらつきがあるのでsetImmediateを使おうという話になる？