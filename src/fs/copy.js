import fs from 'node:fs/promises';

const copy = async () => {
  const SOURCE_DIRNAME = 'files';
  const COPY_SUFFIX = '_copy';
  const DESTINATION_DIRNAME = `${SOURCE_DIRNAME}${COPY_SUFFIX}`;

  const getURL = (dirName, fileName = '') => new URL(`./${dirName}/${fileName}`, import.meta.url);

  // Solve var.1 - Simple use experimental function fsPromises.cp(src, dest[, options])
  /*
    try {
      await fs.cp(getURL(SOURCE_DIRNAME), getURL(DESTINATION_DIRNAME), { recursive: true, force: false, errorOnExist: true });
    } catch (e) {
      throw new Error('FS operation failed');
    }
  */

  // Solve var.2 - Recursive copy folder with internal folders and files
  const copyFolder = async (from, to) => {
    try {
      let objects = await fs.readdir(getURL(from), { withFileTypes: true });
      await fs.mkdir(getURL(to), { recursive: false });

      for (const obj of objects) {
        let fromURL = getURL(from, obj.name);
        let toURL = getURL(to, obj.name);
        if (obj.isDirectory()) {
          await copyFolder(fromURL, toURL)
        } else {
          await fs.copyFile(fromURL, toURL);
        }
      }
    } catch (e) {
      throw new Error('FS operation failed');
    }
  }
  copyFolder(SOURCE_DIRNAME, DESTINATION_DIRNAME);

};

await copy();
