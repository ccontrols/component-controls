const fs = require('fs');
const remark = require('remark');
const toc = require('remark-toc');
const insertReactDocgenTypescript = require('./insert-react-docgen-typescript');

remark()
  .use(insertReactDocgenTypescript)
  .use(toc, { tight: true })
  .process(fs.readFileSync('README.md', 'utf8'), function(err, file) {
    if (err) {
      throw err;
    }
    fs.writeFileSync('README.md', String(file))
  })