import React from 'react';
import Button from '../../components/BaseButton';

export default {
  title: 'Addons/Controls/smart',
  parameters: {
    component: Button,
  },
};

export const allProps = props => <Button {...props} />;

export const onlyColors = props => <Button label="Choose colors" {...props} />;

onlyColors.story = {
  parameters: {
    controls: {
      smart: {
        include: ['color', 'backgroundColor'],
      },
    },
  },
};

export const noColors = props => <Button label="Choose colors" {...props} />;

noColors.story = {
  parameters: {
    controls: {
      smart: {
        exclude: ['color', 'backgroundColor'],
      },
    },
  },
};

// this story does not have parameters, and smart controls will be disabled for it
export const noProps = () => <Button label="No properties" />;
