import { addParameters } from '@storybook/client-api';
import { extractSmartControls } from './smartControls';

addParameters({
  options: {
    enhanceControls: extractSmartControls,
  },
  controls: {
    smart: true,
  },
});
