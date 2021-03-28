import * as path from 'path';
import MatchMediaMock from 'jest-matchmedia-mock';
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
