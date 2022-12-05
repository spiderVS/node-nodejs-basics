import { fork } from 'node:child_process';

const spawnChildProcess = async (args) => {
  const CHILD_PATH = './files/script.js';

  const child = fork(new URL(CHILD_PATH, import.meta.url), args);
  child.on('error', err => process.stdout.write('Error creating child process: ' + '\n' + err));
  child.on('spawn', () => process.stdout.write('Child process creating succeeded.\nWrite something and finish typing by pressing <ENTER>.\nIf you want to close the child process please typing CLOSE and press <ENTER>.\n\n'));
  child.on('close', (code) => process.stdout.write(`\nChild process exited.\nChild process send exit code: ${code}`));
}

// Put your arguments in function call to test this functionality
spawnChildProcess(['Vasya', 123, true, 'one million']);
