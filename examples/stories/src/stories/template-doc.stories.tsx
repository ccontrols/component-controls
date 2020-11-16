/* eslint-disable react/display-name */
import React from 'react';
import { Document } from '@component-controls/core';
import { EditPage } from '@component-controls/blocks';
import { ButtonProps, Button } from '../components/Button';

export default {
  title: 'Introduction/Template doc',
  author: 'atanasster',
  component: Button,
  order: 8,
  smartControls: false,
  template: props => <Button {...props} />,
  description: (
    <p
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      You can use the document `template` property to reduce the amount of
      repetitive code. Click on the
      <div style={{ marginLeft: 5, marginRight: 5 }}>
        <EditPage />
      </div>
      button above to see how the document templates are created.
    </p>
  ),
} as Document<ButtonProps>;

export const John = {
  controls: {
    children: 'john',
    type: 'reset',
  },
};

export const Mary = {
  controls: {
    children: 'mary',
    type: 'submit',
  },
};
