import fs from 'node:fs';
import process from 'node:process';

const read = async () => {
  const PATH = './files/fileToRead.txt';

  const file = fs.createReadStream(new URL(PATH, import.meta.url), 'utf8');
  file.pipe(process.stdout);
};

await read();
