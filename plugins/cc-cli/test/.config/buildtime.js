const path = require('path');
module.exports = {
  stories: [
    path.resolve(
      __dirname,
      '../../../../core/jest-extract/test/fixtures/story/*.docs.tsx',
    ),
  ],
};
