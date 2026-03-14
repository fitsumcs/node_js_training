const path = require("path");
const { Worker } = require("worker_threads");

function runWorker(numbers) {
  return new Promise((resolve, reject) => {
    const workerPath = path.resolve(__dirname, "worker.js");
    const worker = new Worker(workerPath, {
      workerData: numbers,
    });

    worker.on("message", (result) => {
      resolve(result);
    });

    worker.on("error", reject);

    worker.on("exit", (code) => {
      if (code !== 0) {
        reject(new Error(`Worker stopped with exit code ${code}`));
      }
    });
  });
}

async function start() {
  const result = await runWorker([1, 2, 3, 4, 5]);
  console.log("Sum:", result);
}

start();
