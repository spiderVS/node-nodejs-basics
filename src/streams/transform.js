import { stdin, stdout } from 'node:process';
import { pipeline, Transform } from 'node:stream';

const transform = async () => {

  const reverse = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split('').reverse().join('') + '\n\n');
    },
  });

  pipeline(
    stdin,
    reverse,
    stdout,
    (err) => {
      if (err) {
        throw new Error('An error occured in pipeline');
      }
    }
  );
};

await transform();
