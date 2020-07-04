import React from 'react';
import { ControlTypes } from '../controls';
import { FilesControl } from './components/FilesControl';

export default {
  title: 'Controls/Files',
  component: FilesControl,
};

export const overview = ({ images }) => (
  <div>
    {images.map((image, index) => (
      <img src={image} key={`image_${index}`} alt={`run time control`} />
    ))}
  </div>
);

overview.story = {
  description: 'A story with a selectable image picture',
  controls: {
    images: {
      type: ControlTypes.FILES,
      accept: 'image/*',
      value: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',
      ],
    },
  },
};
