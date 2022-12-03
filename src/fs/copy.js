import fs from 'node:fs/promises';

const copy = async () => {
  const DIRNAME = 'files';
  const COPY_SUFFIX = '_copy'

  const getURL = (dirName) => new URL(`./${dirName}/`, import.meta.url);

  try {
    await fs.cp(getURL(DIRNAME), getURL(DIRNAME + COPY_SUFFIX), { recursive: true, force: false, errorOnExist: true });
  } catch (e) {
    throw new Error('FS operation failed');
  }
};

copy();
