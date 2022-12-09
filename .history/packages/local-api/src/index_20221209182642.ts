import express from 'express';

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

  return new Promise<void>

  app.listen(port, () => {
    console.log('Listening to port', port);
  });
};
