const {
  loadConfigurations,
  extractDocuments,
} = require('@component-controls/config');
const { renderExample } = require('@component-controls/test-renderers');
const { render: reactRender } = require('@component-controls/render/react');

{{=it.imports}}
describe('{{=it.name}}', () => {
  beforeAll(async done => {
    jest.mock('rc-util/lib/Portal');
    global.MutationObserver = class {
      constructor() {}
      disconnect() {}
      observe() {}
      takeRecords() {
        return [];
      }
    };

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    done();
  });
  const configPath = '{{=it.configPath}}';
  const config = loadConfigurations(configPath);
  if (!config.renderFn) {
    config.renderFn = reactRender;
  }
  const documents = extractDocuments({ config, configPath });
  if (documents) {
    documents.forEach(file => {
      const exports = require(file);
      const doc = exports.default;
      const examples = Object.keys(exports)
        .filter(key => key !== 'default')
        .map(key => exports[key]);

      if (examples.length) {
        describe(doc.title, () => {
          examples.forEach(example => {
            it(example.name, async () => {
{{=it.render}}
              expect(serialize()).toMatchSnapshot();
            });
          });
        });
      }
    });
  }
});
