import { addDecorator } from '@storybook/client-api';
import { makeDecorator } from '@storybook/addons';

addDecorator(
  makeDecorator({
    name: 'legacyControls',
    parameterName: 'controls',
    wrapper: (storyFn, context) => {
      return storyFn(context);
    },
  }),
);
