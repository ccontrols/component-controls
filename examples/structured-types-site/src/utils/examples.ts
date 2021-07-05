import fs from 'fs';
import path from 'path';

type Examples = {
  [name: string]: string | Examples;
};

const traverseFolder = (folder: string, examples: Examples): void => {
  const files = fs.readdirSync(folder);
  files.forEach(fileName => {
    const filePath = path.resolve(folder, fileName);
    const stat = fs.statSync(filePath);
    if (!filePath.includes('.test.') && !fileName.startsWith('__')) {
      if (stat.isFile()) {
        const content = fs.readFileSync(filePath, 'utf8');
        examples[fileName] = content;
      } else {
        const subFolder: Examples = {};
        traverseFolder(filePath, subFolder);
        examples[fileName] = subFolder;
      }
    }
  });
};
export const getExamples = (): Examples => {
  const examplesFolder = path.resolve(
    __dirname,
    '../../../../../',
    'misc/structured-types/test',
  );
  const examples = {};
  traverseFolder(examplesFolder, examples);
  return examples;
};
