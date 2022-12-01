import process from 'node:process';

const parseArgs = () => {
  const args = process.argv.slice(2);

  if (args.length < 1) {
    throw new Error('You must provide at least one argument');
  }

  for (let i = 0; i < args.length; i+=2) {
    const arg = args[i];
    const value = args[i+1];
    console.log(`${arg.slice(2)} is ${value}`);
  }
}

parseArgs();
