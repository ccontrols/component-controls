import path from 'path';
import fs from 'fs';
import { TeplateFormats } from './types';

export const accessibilityTemplate = (
  format: TeplateFormats,
): {
  allyimports: string;
  allytest: string;
} => {
  const importPath = path.resolve(
    __dirname,
    `../templates/accessibility/import/import.${format}.js`,
  );
  const testPath = path.resolve(
    __dirname,
    `../templates/accessibility/test/test.${format}.js`,
  );

  return {
    allyimports: fs.readFileSync(importPath, 'utf8'),
    allytest: fs.readFileSync(testPath, 'utf8'),
  };
};
