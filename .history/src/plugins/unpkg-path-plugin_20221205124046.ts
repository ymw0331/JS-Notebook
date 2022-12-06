import * as esbuild from 'esbuild-wasm';
import axios from 'axios';

export const unpkgPathPlugin = () => {
  return {
    name: 'unpkg-path-plugin',
    //find out where the path is
    setup(build: esbuild.PluginBuild) {
      build.onResolve({ filter: /.*/ }, async (args: any) => {
        console.log('onResolve', args);
        if (args.path === 'index.js') {
          return { path: args.path, namespace: 'a' };
        }

        if (args.path.includes('./') || args.path.includes('../')) {
          return {
            namespace: 'a',
            path: new URL(
              args.path,
              'https://unpkg.com' + args.resolveDir + '/'
            ).href,
          };
        }

        return {
          namespace: 'a',
          path: `https://unpkg.com/${args.path}`,
        };
      });

      //load up the file
      build.onLoad({ filter: /.*/ }, async (args: any) => {
        console.log('onLoad', args);

        if (args.path === 'index.js') {
          return {
            loader: 'jsx',
            contents: `
              const react = require('react');
              console.log(message);
            `,
          };
        }
        const { data, request } = await axios.get(args.path);
        console.log(request);
        return {
          loader: 'jsx',
          contents: data,
          resolveDir: new URL('./', request.responseURL).pathname,
        };
      });
    },
  };
};
