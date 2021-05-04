import * as path from 'path';
import { run, AxeResults } from 'axe-core';
import { loadConfigurations } from '@component-controls/config';
import { renderExample } from '@component-controls/test-renderers';
import { reactRunDOM } from '@component-controls/test-renderers';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import '@component-controls/jest-axe-matcher';

configure({ adapter: new Adapter() });

import doc, {
  overview,
} from '../../../core/jest-extract/test/fixtures/story/VariantButton.docs';

describe('VariantButton', () => {
  const configPath = path.resolve(__dirname, '.config');
  const config = loadConfigurations(configPath);
  const controls = require(path.resolve(
    __dirname,
    '../../../core/jest-extract/test/fixtures/story/',
    doc.testData,
  ));
  Object.keys(controls['overview']).forEach(ctrlName => {
    const values = controls['overview'][ctrlName];
    describe(ctrlName, () => {
      describe('overview', () => {
        const example = overview;

        const rendered = renderExample({
          example,
          doc,
          config,
          values,
        });
        it('snapshot', async () => {
          const component = mount(rendered);
          expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
        });
        it('accessibility', async () => {
          const results = await reactRunDOM<AxeResults>(rendered, run);
          expect(results).toHaveNoAxeViolations();
        });
      });
    });
  });
});
