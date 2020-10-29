import React from 'react';
import { ControlTypes, Example } from '@component-controls/core';
import { ControlsStateProvider } from '@component-controls/store';
import { FilesEditor } from './FilesEditor';

export default {
  title: 'Editors/FilesEditor',
  component: FilesEditor,
};

export const overview: Example = () => {
  const [state, setState] = React.useState([
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',
  ]);
  return (
    <ControlsStateProvider
      onChange={(name, newVal) => setState(newVal)}
      controls={{
        prop: {
          type: ControlTypes.FILES,
          accept: 'image/*',
          value: state,
        },
      }}
    >
      <FilesEditor name="prop" />
      <img src={state[0]} alt="files editor" />
    </ControlsStateProvider>
  );
};
