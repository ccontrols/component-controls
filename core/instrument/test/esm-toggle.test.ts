import { fixtureToTest, TestCallback } from './loadTestFiles';

const createTest = (fileName: string, callback: TestCallback) =>
  fixtureToTest(['esm', 'toggle'], fileName, callback);

describe('esm-toggle', () => {
  createTest('toggle-story.js', parsed => {
    const component = parsed.components[parsed.doc.componentsLookup['Toggle']];
    expect(component).toMatchObject({
      name: 'Toggle',
      from: './Toggle',
      importedName: 'Toggle',
    });
    const pckg = parsed.packages[parsed.doc.package];
    expect(pckg).toMatchObject({
      name: '@component-controls/instrument',
      repository: {
        browse:
          'https://github.com/ccontrols/component-controls/tree/master/core/instrument/test/fixtures/esm/toggle/toggle-story.js',
        docs: 'https://github.com/ccontrols/component-controls/tree/master#readme',
        issues: 'https://github.com/ccontrols/component-controls/issues',
      },
    });
  });
});
