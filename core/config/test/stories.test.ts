import path from 'path';
import { loadConfiguration, extractDocuments } from '../src/index';

const checkDocs = (docs: string[]): boolean => {
  return [
    '../../../ui/editors/src/ArrayEditor/ArrayEditor.stories.tsx',
    '../../../examples/stories/src/stories/template-bind.stories.tsx',
  ].every(f => docs.includes(path.resolve(__dirname, f)));
};
describe('config-folder', () => {
  it('config file short option', () => {
    const docs = extractDocuments(
      loadConfiguration(__dirname, undefined, [
        'file',
        'name',
        '-c',
        'fixtures',
      ]),
    );
    expect(checkDocs(docs)).toBe(true);
  });

  it('config file long option', () => {
    const docs = extractDocuments(
      loadConfiguration(__dirname, undefined, [
        'file',
        'name',
        '--config',
        'fixtures',
      ]),
    );
    expect(checkDocs(docs)).toBe(true);
  });
});
