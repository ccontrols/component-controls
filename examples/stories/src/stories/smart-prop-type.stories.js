import React from 'react';
import { Button } from '../components/PropTypesButton';

export default {
  title: 'Storybook/Smart PropTypes',
  parameters: {
    component: Button,
  },
};

export const allProps = props => <Button {...props} />;

export const onlyColors = props => <Button label="Choose colors" {...props} />;

onlyColors.story = {
  parameters: {
    addonControls: {
      smart: {
        include: ['color', 'backgroundColor'],
      },
    },
  },
};

export const noColors = () => <Button label="Choose colors" />;

noColors.story = {
  parameters: {
    addonControls: {
      smart: {
        exclude: ['color', 'backgroundColor'],
      },
    },
  },
};

// this story does not have parameters, and smart controls will be disabled for it
export const noProps = () => <Button label="No properties" />;
