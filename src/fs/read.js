import fs from 'node:fs/promises';

const read = async () => {
  const PATH = './files/fileToRead.txt';

  try {
    const content = await fs.readFile(new URL(PATH, import.meta.url), { encoding: 'utf8' });
    console.log(content);
  } catch (e) {
    throw new Error('Fs operation failed')
  }
};

await read();
