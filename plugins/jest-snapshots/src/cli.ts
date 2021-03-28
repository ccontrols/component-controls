import path from 'path';
import fs from 'fs';
import { cliArgs } from '@component-controls/webpack-compile/cli';
import { jestCliArgs } from './args';
import { createTemplate } from './templates';

export const run = async (): Promise<void> => {
  const args = cliArgs(jestCliArgs);
  const parsedArgs = args.parse();
  let testFolder =
    (parsedArgs.output as string) || path.resolve(process.cwd(), 'tests');

  if (!path.isAbsolute(testFolder)) {
    testFolder = path.resolve(process.cwd(), testFolder);
  }

  if (!fs.existsSync(testFolder)) {
    fs.mkdirSync(testFolder);
  }
  const {
    renderer,
    format,
    overwrite,
    config,
    test = 'stories.test.js',
    bundle,
    name,
  } = parsedArgs;
  const testFilePath = path.resolve(testFolder, test);

  if (!overwrite && fs.existsSync(testFilePath)) {
    console.warn(
      `${testFilePath} already exists and you have chosen not to overwrite it.`,
    );
    return;
  }
  const content = createTemplate({
    renderer,
    format,
    configPath: config,
    name,
    bundle,
  });
  fs.writeFileSync(testFilePath, content, 'utf8');
};
