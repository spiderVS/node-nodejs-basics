import fs from 'node:fs/promises';

const create = async () => {
  const PATH = new URL('./files/fresh.txt', import.meta.url);

  try {
    await fs.access(PATH);
  } catch (e) {
    await fs.writeFile(PATH, 'I am fresh and young', 'utf8');
    return;
  }
  throw new Error('FS operation failed');
};

await create();
