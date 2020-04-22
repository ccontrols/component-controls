import fs from 'fs';
import remark from 'remark';
import toc from 'remark-toc';
import { insertOverview } from './overview-sections/insert-overview';
import { insertTSDoc } from './tsdoc/insert-tsdoc';
import { insertReactDocgenTypescript } from './react-docgen-typescript/insert-react-docgen-typescript';

remark()
  .use(insertReactDocgenTypescript)
  .use(insertTSDoc)
  .use(insertOverview)
  .use(toc, { tight: true })
  .process(fs.readFileSync('README.md', 'utf8'), function(err, file) {
    if (err) {
      throw err;
    }
    fs.writeFileSync('README.md', String(file));
  });
