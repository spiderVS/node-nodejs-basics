import fs from 'node:fs';
import process from 'node:process';

const write = async () => {
  const PATH = './files/fileToWrite.txt';

  const file = fs.createWriteStream(new URL(PATH, import.meta.url), 'utf8');
  process.stdin.pipe(file);
};

await write();
