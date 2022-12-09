import { Command } from 'commander';

export const serveCommand = new Command()
  .command('serve [filename]')
  .description('Open a file for editing')
  .option('-p, --port <number>' )
  .action(() => {
    console.log('Getting ready to serve a file');
  });
