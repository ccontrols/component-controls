import * as fs from 'fs';
import * as path from 'path';
import * as chalk from 'chalk';
import * as yargs from 'yargs';
import remark from 'remark';
import toc from 'remark-toc';
import { insertOverview } from './overview-sections/insert-overview';
import { insertTSDoc } from './tsdoc/insert-tsdoc';
import { insertReactDocgenTypescript } from './react-docgen-typescript/insert-react-docgen-typescript';

export default (): void => {
  const options = yargs
    .usage('ts-md -f <file>')
    .option('f', {
      alias: 'file',
      describe: 'Input file name',
      type: 'string',
    })
    .option('t', {
      alias: 'toc',
      describe: 'Table of content',
      type: 'boolean',
    }).argv;
  const fileName: string = (options.file as string) || 'README.md';
  const useToc: boolean =
    typeof options.toc !== 'undefined' ? (options.toc as boolean) : true;
  console.log('processing file:', chalk.red(path.resolve(fileName)));
  let r = remark()
    .use(insertReactDocgenTypescript)
    .use(insertTSDoc)
    .use(insertOverview);
  if (useToc) {
    r = r.use(toc, { tight: true });
  }

  r.process(fs.readFileSync(fileName, 'utf8'), function(err, file) {
    if (err) {
      throw err;
    }
    fs.writeFileSync(fileName, String(file));
  });
};
