import React from 'react';
import { ImageProps } from 'theme-ui';
import { Document, Example, ControlTypes } from '@component-controls/core';
import { TitledImage } from './TitledImage';

export default {
  title: 'Components/TitledImage',
  component: TitledImage,
  category: 'Display',
} as Document;

export const overview: Example<ImageProps> = ({ title }) => {
  return (
    <TitledImage
      title={title}
      alt="alt text"
      src="https://github.com/ccontrols/component-controls/raw/master/misc/storybook-custom-docs/images/simple-page.jpg"
    />
  );
};

overview.controls = {
  title: { type: ControlTypes.TEXT, value: 'some image title' },
};
