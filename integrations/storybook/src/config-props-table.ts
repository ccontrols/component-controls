import { addParameters } from '@storybook/client-api';
import { createPropsTableControls } from './preview/PropsTable';

addParameters({
  docs: {
    addons: {
      propsTable: {
        controls: createPropsTableControls,
      },
    },
  },
});
