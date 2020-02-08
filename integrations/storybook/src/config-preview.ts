import { addParameters } from '@storybook/client-api';
import { createControlsPanel } from './preview/PreviewPanel';

addParameters({
  docs: {
    addons: {
      preview: {
        controls: createControlsPanel,
      },
    },
  },
});
