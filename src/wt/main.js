import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const performCalculations = async () => {

  const numOfCores = cpus().length;
  const dataArray = Array(numOfCores)
    .fill(10)
    .map((core, idx) => core + idx);

  const arrayOfPromises = dataArray
    .map(workerData => {
      return new Promise((resolve, reject) => {
        const worker = new Worker(new URL('./worker.js', import.meta.url), { workerData });
        worker.on('message', resolve);
        worker.on('error', reject);
        worker.on('exit', (code) => {
          if (code !== 0)
            reject(new Error(`Worker stopped with exit code ${code}`));
        })
      })
    });

  Promise.allSettled(arrayOfPromises)
    .then(results => {
      const resultsArray = results.map((result) => {
        if (result.status == "fulfilled") {
          return ({
            status: 'resolved',
            data: result.value
          })
        } else if (result.status == "rejected") {
          return ({
            status: 'error',
            data: null
          })
        }
      });

      console.log(resultsArray);
    });
};

await performCalculations();
