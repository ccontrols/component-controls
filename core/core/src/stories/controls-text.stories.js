import React from 'react';
import { ControlTypes } from '../controls';
import { TextControl } from './components/TextControl';

export default {
  title: 'Controls/TEXT',
  component: TextControl,
};

export const overview = ({ text }) => <div>{text}</div>;

overview.story = {
  description: 'A simple story that just returns the text parameter',
  controls: {
    text: {
      type: ControlTypes.TEXT,
      value: 'Hello',
      label: 'Enter text',
      description: 'a text control',
    },
  },
};

export const hidden = ({ text }) => text;

hidden.story = {
  description: 'Hidden controls in story',
  controls: {
    text: { type: ControlTypes.TEXT, value: 'Hello', hidden: true },
  },
};

export const placeholder = ({ text }) => text;

placeholder.story = {
  description: 'Placeholder text with empty value',
  controls: {
    text: { type: ControlTypes.TEXT, placeholder: 'Enter some text' },
  },
};

export const textArea = ({ text }) => (
  <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
);

textArea.story = {
  description: 'You can use a multi-lines text area by specifying ',
  controls: {
    text: {
      type: ControlTypes.TEXT,
      rows: 4,
      placeholder: 'Enter multiple lines of text',
    },
  },
};

export const defaultValue = ({ text }) => text;

defaultValue.story = {
  description: 'Default value',
  controls: {
    text: { type: ControlTypes.TEXT, value: 'Hello', defaultValue: 'help' },
  },
};

export const required = ({ text }) => text;

required.story = {
  description: 'Required value',
  controls: {
    text: { type: ControlTypes.TEXT, value: 'Hello', required: true },
  },
};
