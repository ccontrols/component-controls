import path from 'path';
import { parseFiles } from '../../../src/index';

describe('license', () => {
  it('full license', () => {
    const results = parseFiles([path.resolve(__dirname, 'full-license.js')]);
    expect(results).toEqual({
      util: {
        displayName: 'util',
        kind: 11,
        tags: [
          {
            tag: 'license',
            content:
              'Copyright (c) 2015 Example Corporation Inc.\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.',
          },
        ],
      },
    });
  });
  it('apache-2 license', () => {
    const results = parseFiles([path.resolve(__dirname, 'apache-2.js')]);
    expect(results).toEqual({
      util: {
        displayName: 'util',
        kind: 11,
        description: 'Utility functions for the foo package.',
        tags: [
          {
            tag: 'module',
            content: 'foo/util',
          },
          {
            tag: 'license',
            content: 'Apache-2.0',
          },
        ],
      },
    });
  });
});
