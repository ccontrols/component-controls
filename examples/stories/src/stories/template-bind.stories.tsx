/* eslint-disable react/display-name */
import React from 'react';
import { Example, Document } from '@component-controls/core';
import { EditPage } from '@component-controls/blocks';
import { ButtonProps, Button } from '../components/Button';

export default {
  title: 'ESM/Template bind',
  author: 'atanasster',
  component: Button,
  order: 9,
  smartControls: false,
  description: (
    <p
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
      }}
    >
      You can bind stories to templates to reduce the amount of repetitive code.
      Click on the
      <div style={{ marginLeft: 5, marginRight: 5 }}>
        <EditPage />
      </div>
      button above to see how the templates are linked to the stories.
    </p>
  ),
} as Document;

const Template: Example<ButtonProps> = props => <Button {...props} />;

export const John = Template.bind();
John.controls = {
  children: 'john',
  type: 'reset',
};

export const Mary = Template.bind();
Mary.controls = {
  children: 'mary',
  type: 'submit',
};
