// timer->pending callbacks -> idle, prepare -> poll -> check -> callback

const fs = require("fs");
const crypto = require("crypto");

console.log("1. script started");

setTimeout(() => {
  console.log("2. setTimeout 0s callback (mcarotask)");
}, 0);

setTimeout(() => {
  console.log("3. setTimeout 0s callback (mcarotask)");
}, 0);

setImmediate(() => {
  console.log("4. setImmediate callbacks (check)");
});

Promise.resolve().then(() => {
  console.log("5. Promise resolve (microtask)");
});

process.nextTick(() => {
  console.log("6. process.nextTick callbacks (microtask)");
});

fs.readFile(__dirname, () => {
  console.log("7. file read operation I/O callback");
});

crypto.pbkdf2("secret", "salt", 10000, 64, "sha512", (err, key) => {
  if (err) throw err;
  console.log("8 . pbkdf2 opertaion CPU intensive task ");
});

console.log("9. script ends");
