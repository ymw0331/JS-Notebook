import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

// [] indicated optional, <> compulsary
export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action((filename = 'notebook.js', options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      serve(parseInt(options.port), path.basename(filename), dir);
    } catch (err) {
      if (err instanceof Error) {
        console.log('Here is the problem: ', err.message);
      }
    }
  });
