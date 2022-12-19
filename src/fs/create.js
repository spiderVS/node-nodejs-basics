import fs from 'node:fs/promises';

const create = async () => {
  const PATH = new URL('./files/fresh.txt', import.meta.url);

  try {
    await fs.writeFile(PATH, 'I am fresh and young', { encoding: 'utf8', flag: 'ax'});
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await create();
