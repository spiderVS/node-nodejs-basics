import fs from 'node:fs/promises';

const remove = async () => {
  const PATH = './files/fileToRemove.txt';

  try {
    await fs.rm(new URL(PATH, import.meta.url));
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await remove();
