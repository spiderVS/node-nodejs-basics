import fs from 'node:fs/promises';

const rename = async () => {
  const OLD_PATH = './files/wrongFilename.txt';
  const NEW_PATH = './files/properFilename.md';
  const FS_ERROR = new Error('FS operation failed');

  const getURL = (path) => new URL(path, import.meta.url);

  try {
    await fs.copyFile(getURL(OLD_PATH), getURL(NEW_PATH), fs.constants.COPYFILE_EXCL);
    await fs.rm(getURL(OLD_PATH));
  } catch (e) {
    throw FS_ERROR;
  }
};

await rename();
