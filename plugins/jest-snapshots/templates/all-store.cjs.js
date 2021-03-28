{{=it.storeImports}}

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
{{=it.storeLoop}}
  
});
