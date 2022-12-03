import fs from 'node:fs';
import process from 'node:process';

const read = async () => {
  const PATH = './files/fileToRead.txt';

  const readableStream = fs.createReadStream(new URL(PATH, import.meta.url), 'utf8');
  readableStream.on('data', (chunk) => {
    process.stdout.write(chunk + '\n');
})
};

await read();
