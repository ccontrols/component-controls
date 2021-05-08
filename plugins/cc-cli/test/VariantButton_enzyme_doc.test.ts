import * as path from 'path';
import { run, AxeResults } from 'axe-core';
import { reactRunDOM } from '@component-controls/test-renderers';
import '@component-controls/jest-axe-matcher';
import { loadConfigurations } from '@component-controls/config';
import { renderDocument } from '@component-controls/test-renderers';
import { mount, configure } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

import * as examples from './fixtures/VariantButton.docs';
import data from '../../../core/jest-extract/test/fixtures/story/VariantButton.data';

describe('VariantButton', () => {
  const configPath = path.resolve(__dirname, '.config');
  const config = loadConfigurations(configPath);
  const renderedExamples = renderDocument(examples, config, data);
  renderedExamples.forEach(({ name, rendered, dataId, values }) => {
    describe(name, () => {
      const runTests = () => {
        it('snapshot', () => {
          const component = mount(rendered);
          expect(toJson(component, { mode: 'deep' })).toMatchSnapshot();
        });
        it('accessibility', async () => {
          const axeResults = await reactRunDOM<AxeResults>(rendered, run);
          expect(axeResults).toHaveNoAxeViolations();
        });
      };
      if (values) {
        describe(dataId, runTests);
      } else {
        runTests();
      }
    });
  });
});
