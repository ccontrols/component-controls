import path from 'path';
import fs from 'fs';
import { getFileIinfo } from '../src/misc/file-info';

const getFileInfoResults = async (filePath: string) => {
  const source = fs.readFileSync(filePath, 'utf8');
  return await getFileIinfo(filePath, source);
};
describe('file-info', () => {
  it('tree', async () => {
    const info = await getFileInfoResults(
      path.resolve(__dirname, '../../../ui/components/src/Tree/Tree.tsx'),
    );
    expect(info.commits[info.commits.length - 1].subject).toBe(
      'feat: component jsx explorer',
    );
  });
  it('index file', async () => {
    const info = await getFileInfoResults(
      path.resolve(__dirname, '../src/index.ts'),
    );
    expect(new Date(info.dateCreated).toISOString().slice(0, 10)).toBe(
      '2020-02-13',
    );
  });

  it('actionbar', async () => {
    const info = await getFileInfoResults(
      path.resolve(
        __dirname,
        '../../../ui/components/src/ActionBar/ActionBar.tsx',
      ),
    );
    expect(new Date(info.dateCreated).toISOString().slice(0, 10)).toBe(
      '2020-02-28',
    );
  });
});
