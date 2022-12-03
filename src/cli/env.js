const parseEnv = () => {
  const envArray = [];
  for (const key in process.env) {
    if (key.startsWith('RSS_')) {
      envArray.push(`${key}=${process.env[key]}`);
    }
  }
  console.log(envArray.join('; '));
};

parseEnv();
