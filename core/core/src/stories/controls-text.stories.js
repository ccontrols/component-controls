import React from 'react';
import { ControlTypes } from '../controls';
import { TextControl } from './components/TextControl';

export default {
  title: 'Controls/Text',
  component: TextControl,
};

export const overview = ({ text }) => <div>{text}</div>;

overview.description = 'A simple story that just returns the text parameter';
overview.controls = {
  text: {
    type: ControlTypes.TEXT,
    value: 'Hello',
    label: 'Enter text',
    description: 'a text control',
  },
};

export const hidden = ({ text }) => <div>{text}</div>;

hidden.description = 'Hidden controls in story';
hidden.controls = {
  text: { type: ControlTypes.TEXT, value: 'Hello', hidden: true },
};

export const placeholder = ({ text }) => <div>{text}</div>;

placeholder.description = 'Placeholder text with empty value';
placeholder.controls = {
  text: { type: ControlTypes.TEXT, placeholder: 'Enter some text' },
};

export const textArea = ({ text }) => (
  <p style={{ whiteSpace: 'pre-line' }}>{text}</p>
);

textArea.description = 'You can use a multi-lines text area by specifying ';
textArea.controls = {
  text: {
    type: ControlTypes.TEXT,
    rows: 4,
    placeholder: 'Enter multiple lines of text',
  },
};

export const defaultValue = ({ text }) => text;

defaultValue.description = 'Default value';
defaultValue.controls = {
  text: { type: ControlTypes.TEXT, value: 'Hello', defaultValue: 'help' },
};

export const required = ({ text }) => text;

required.description = 'Required value';
required.controls = {
  text: { type: ControlTypes.TEXT, value: 'Hello', required: true },
};
