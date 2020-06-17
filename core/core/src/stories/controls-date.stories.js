import React from 'react';
import { ControlTypes } from '../controls';
import { DateControl } from './components/DateControl';

export default {
  title: 'Controls/DATE',
  component: DateControl,
};

export const overview = ({ date }) => <div>{date.toLocaleString()}</div>;

overview.story = {
  description: 'A simple story that displays date/time',
  controls: {
    date: {
      type: ControlTypes.DATE,
      value: new Date(),
      description: 'a datetime value',
    },
  },
};

export const onlyDatePicker = ({ date }) => <div>{date.toLocaleString()}</div>;

onlyDatePicker.story = {
  description: 'A simple story that displays date',
  controls: {
    date: {
      type: ControlTypes.DATE,
      value: new Date(),
      description: 'a date only value',
      timePicker: false,
    },
  },
};

export const onlyTimePicker = ({ date }) => <div>{date.toLocaleString()}</div>;

onlyTimePicker.story = {
  description: 'A simple story that displays time',
  controls: {
    date: {
      type: ControlTypes.DATE,
      value: new Date(),
      description: 'a time only value',
      datePicker: false,
    },
  },
};
