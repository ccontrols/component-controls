import React from 'react';
import { TitledImage, TitledImageProps } from './TitledImage';

export default {
  title: 'Components/TitledImage',
  component: TitledImage,
};

export const overview = ({ title }: TitledImageProps) => {
  return (
    <TitledImage
      title={title}
      alt="alt text"
      src="https://github.com/ccontrols/component-controls/raw/master/misc/storybook-custom-docs/images/simple-page.jpg"
    />
  );
};

overview.story = {
  controls: {
    title: { type: 'text', value: 'some image title' },
  },
};
