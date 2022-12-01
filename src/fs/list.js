import fs from 'node:fs/promises';

const list = async () => {
  const PATH = './files';
  
  try {
    const files = await fs.readdir(new URL(PATH, import.meta.url));
    for (const file of files) {
      console.log(file);
    }
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

await list();
