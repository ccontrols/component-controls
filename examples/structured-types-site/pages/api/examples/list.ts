import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export type Examples = {
  [name: string]: string | Examples;
};

const traverseFolder = (folder: string, examples: Examples): void => {
  const files = fs.readdirSync(folder);

  files.forEach(fileName => {
    const filePath = path.resolve(folder, fileName);
    const stat = fs.statSync(filePath);
    if (
      !filePath.includes('.test.') &&
      !fileName.startsWith('__') &&
      !fileName.startsWith('fixtures')
    ) {
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
const getExamples = (): Examples => {
  const examplesFolder = path.resolve(
    __dirname,
    '../../../../',
    'misc/structured-types/test',
  );
  const examples = {};
  traverseFolder(examplesFolder, examples);
  return examples;
};

export const examples = getExamples();

const list = Object.keys(examples).map(name => ({
  name,
  items: Object.keys(examples[name])
    .filter(key => typeof (examples[name] as Examples)[key] === 'object')
    .map(key => ({
      name: key,
      items: Object.keys((examples[name] as Examples)[key]).map(name => ({
        name,
      })),
    })),
}));
export default async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  res.status(200).json(list);
};
