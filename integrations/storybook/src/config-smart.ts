import { addParameters } from '@storybook/client-api';
import { extractSmartControls } from './smartControls';

addParameters({
  options: {
    enhanceControls: extractSmartControls,
  },
  addonControls: {
    smart: true,
  },
});
