import React from 'react';
import { ControlTypes } from '../controls';
import { DateControl } from './components/DateControl';

export default {
  title: 'Controls/Date',
  component: DateControl,
};

export const overview = ({ date }) => <div>{date.toLocaleString()}</div>;

overview.description = 'A simple story that displays date/time';
overview.controls = {
  date: {
    type: ControlTypes.DATE,
    value: new Date(),
    description: 'a datetime value',
  },
};

export const onlyDatePicker = ({ date }) => <div>{date.toLocaleString()}</div>;

onlyDatePicker.description = 'A simple story that displays date';
onlyDatePicker.controls = {
  date: {
    type: ControlTypes.DATE,
    value: new Date(),
    description: 'a date only value',
    timePicker: false,
  },
};

export const onlyTimePicker = ({ date }) => <div>{date.toLocaleString()}</div>;

onlyTimePicker.description = 'A simple story that displays time';
onlyTimePicker.controls = {
  date: {
    type: ControlTypes.DATE,
    value: new Date(),
    description: 'a time only value',
    datePicker: false,
  },
};
