import express from 'express';
import 

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

  // async await syntax
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });



};
