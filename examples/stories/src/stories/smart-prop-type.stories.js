import React from 'react';
import { Button } from '../components/PropTypesButton';

export default {
  title: 'Introduction/Smart PropTypes',
  author: 'atanasster',
  component: Button,
};

export const allProps = props => <Button {...props} />;

export const onlyColors = props => <Button label="Choose colors" {...props} />;

onlyColors.story = {
  smartControls: {
    include: ['color', 'backgroundColor'],
  },
};

export const noColors = props => <Button label="Choose colors" {...props} />;

noColors.story = {
  smartControls: {
    exclude: ['color', 'backgroundColor'],
  },
};

// this story does not have parameters, and smart controls will be disabled for it
export const noProps = () => <Button label="No properties" />;
