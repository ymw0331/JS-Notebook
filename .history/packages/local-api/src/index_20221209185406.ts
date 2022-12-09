import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export const serve = (port: number, filename: string, dir: string) => {
  const app = express();

app.use(createProxyMiddleware({
  
}))

  // async await syntax
  return new Promise<void>((resolve, reject) => {
    app.listen(port, resolve).on('error', reject);
  });



};
