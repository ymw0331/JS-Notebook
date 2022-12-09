import path from 'path';
import { Command } from 'commander';
import { serve } from 'local-api';

// [] indicated optional, <> compulsary
export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>', 'port to run server on', '4005')
  .action(async (filename = 'notebook.js', options: { port: string }) => {
    try {
      const dir = path.join(process.cwd(), path.dirname(filename));
      await serve(parseInt(options.port), path.basename(filename), dir);
    } catch (err: any) {
      if (err.code === 'EADDRINUSE') {
        console.log(
          'Port is in use. Try running on a different port ',
          err.message
        );
      } else {
        console.log('Here is the problem: ', err.message);
      }
      process.exit(1);
    }
  });
