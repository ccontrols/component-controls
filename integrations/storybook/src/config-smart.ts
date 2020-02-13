import { addParameters } from '@storybook/client-api';
// import { extractSmartControls } from './shared/smartControls';

addParameters({
  options: {
    enhanceControls: undefined, //extractSmartControls,
  },
  addonControls: {
    smart: true,
  },
});
