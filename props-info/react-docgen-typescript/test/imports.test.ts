import path from 'path';
import { run } from '../src/index';

export type LoadTestCallbackFn = (fileName: string) => any;

export const loadTestFiles = (fileName: string, componentName: string) => {
  const filePath = path.resolve(__dirname, fileName);
  console.log(filePath);
  it(fileName, async () => {
    expect(await run()(filePath, componentName)).toMatchSnapshot();
  });
};

describe('imports', () => {
  loadTestFiles('../../../ui/blocks/src/Story/Story.tsx', 'Story');
});
