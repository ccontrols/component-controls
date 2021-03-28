const path = require('path');
const MatchMediaMock = require('jest-matchmedia-mock').default;
{{=it.storeImports}}

{{=it.imports}}

let matchMedia;

describe('{{=it.name}}', () => {
  beforeAll(() => {
    jest.mock('rc-util/lib/Portal');
    matchMedia = new MatchMediaMock();
  });
  afterEach(() => {
    matchMedia.clear();
  });
{{=it.storeLoop}}
  
});
