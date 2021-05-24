import { extract } from './babel-parse';
export const run = (filePath: string): ReturnType<typeof extract> => {
  return extract(filePath);
};
