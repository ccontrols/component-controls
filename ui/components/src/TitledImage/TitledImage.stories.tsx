import React from 'react';
import { ImageProps } from 'theme-ui';

import { TitledImage } from './TitledImage';

export default {
  title: 'Components/TitledImage',
  component: TitledImage,
};

export const overview = ({ title }: ImageProps) => {
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
