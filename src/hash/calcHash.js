import { createHash } from 'node:crypto';
import fs from 'node:fs/promises';


const calculateHash = async () => {
  const PATH = './files/fileToCalculateHashFor.txt';

  try {
    const content = await fs.readFile(new URL(PATH, import.meta.url), { encoding: 'utf8' });
    console.log(createHash('sha256').update(content).digest('hex'));
  } catch (e) {
    throw new Error('Operation failed')
  }
};

await calculateHash();
