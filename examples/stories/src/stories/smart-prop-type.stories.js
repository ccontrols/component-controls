import React from 'react';
import { Button } from '../components/PropTypesButton';

export default {
  title: 'Introduction/Smart PropTypes',
  author: 'atanasster',
  component: Button,
  order: 3,
};

export const allProps = props => <Button {...props} />;

export const onlyColors = props => <Button {...props}>Choose colors</Button>;

onlyColors.smartControls = {
  include: ['color', 'backgroundColor'],
};

export const noColors = props => <Button {...props}>Choose colors</Button>;

noColors.smartControls = {
  exclude: ['color', 'backgroundColor'],
};

// this story does not have parameters, and smart controls will be disabled for it
export const noProps = () => <Button>No properties</Button>;
