import fs from 'node:fs/promises';

const rename = async () => {
  const OLD_PATH = './files/wrongFilename.txt';
  const NEW_PATH = './files/properFilename.md';
  const FS_ERROR = new Error('FS operation failed');

  const getURL = (path) => new URL(path, import.meta.url);

  try {
    await fs.access(getURL(OLD_PATH));
    await fs.access(getURL(NEW_PATH));
  } catch (e) {
    try {
      await fs.rename(getURL(OLD_PATH), getURL(NEW_PATH));
      return;
    } catch (e) {
      throw FS_ERROR;
    }
  }
  throw FS_ERROR;
};

await rename();
