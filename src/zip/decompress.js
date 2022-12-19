import fs from 'node:fs';
import zlib from 'node:zlib';
import { pipeline } from 'node:stream';

const decompress = async () => {
  const INPUT_PATH = './files/archive.gz';
  const OUTPUT_PATH = './files/fileToCompress.txt';

  const inputFileStream = fs.createReadStream(new URL(INPUT_PATH, import.meta.url));
  const outputFileStream = fs.createWriteStream(new URL(OUTPUT_PATH, import.meta.url));
  const decompressStream = zlib.createUnzip();
  pipeline(
    inputFileStream,
    decompressStream,
    outputFileStream,
    (err) => {
      if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
      }
    }
  )
};

await decompress();
