import path from 'path';
import fs from 'fs';
import { TeplateFormats, Formats } from './utils';

const cache: Record<string, string> = {};

export const getTemplate = (file: string, format: TeplateFormats): string => {
  let fileName: string = path.resolve(__dirname, `../templates/${file}.js`);
  for (let index = Formats.indexOf(format); index >= 0; index--) {
    if (cache[fileName]) {
      return cache[fileName];
    }
    if (fs.existsSync(fileName)) {
      break;
    }
    const fileFormat = Formats[index];
    fileName = path.resolve(__dirname, `../templates/${file}.${fileFormat}.js`);
  }
  return fs.readFileSync(fileName, 'utf8');
};
