const {Worker} = require("worker_threads");
// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);


let num = 40;

//Create new worker
const worker = new Worker("./worker.js", {workerData: {num: num}});

//Listen for a message from worker
worker.once("message", result => {
  console.log(`${num}th Fibonacci Number: ${result}`);
});

worker.on("error", error => {
  console.log(error);
});

worker.on("exit", exitCode => {
  console.log(exitCode);
})

console.log("Executed in the parent thread");