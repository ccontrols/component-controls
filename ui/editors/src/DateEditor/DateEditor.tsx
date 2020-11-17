import React, {
  ChangeEvent,
  RefObject,
  useState,
  useRef,
  useEffect,
} from 'react';
import { Input, Box } from 'theme-ui';
import { ComponentControlDate, ControlTypes } from '@component-controls/core';
import { useControl } from '@component-controls/store';
import { PropertyEditor } from '../types';
import { addPropertyEditor } from '../prop-factory';

const toDate = (date?: string | Date): Date | undefined =>
  typeof date === 'string' ? new Date(date) : date;

const formatDate = (date: Date | undefined) => {
  if (date) {
    const year = `000${date.getFullYear()}`.slice(-4);
    const month = `0${date.getMonth() + 1}`.slice(-2);
    const day = `0${date.getDate()}`.slice(-2);

    return `${year}-${month}-${day}`;
  }
  return '';
};

const formatTime = (date: Date | undefined) => {
  if (date) {
    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);

    return `${hours}:${minutes}`;
  }
  return '';
};

/**
 * Date control editor.
 */
export const DateEditor: PropertyEditor = ({ name }) => {
  const [control, onChange] = useControl<ComponentControlDate>(name);
  const [valid, setValid] = useState(true);
  const dateInputRef = useRef<HTMLInputElement>();
  const timeInputRef = useRef<HTMLInputElement>();
  useEffect(() => {
    if (valid !== false) {
      if (dateInputRef && dateInputRef.current) {
        dateInputRef.current.value = formatDate(toDate(control.value));
      }
      if (timeInputRef && timeInputRef.current) {
        timeInputRef.current.value = formatTime(toDate(control.value));
      }
    }
  }, [control.value, valid]);

  const onDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    const [year, month, day] = e.target.value.split('-');
    if (control.value) {
      const result = new Date(control.value);
      if (result.getTime()) {
        result.setFullYear(parseInt(year, 10));
        result.setMonth(parseInt(month, 10) - 1);
        result.setDate(parseInt(day, 10));
        if (result.getTime()) {
          isValid = true;
          onChange(result);
        }
      }
    }
    if (valid !== isValid) {
      setValid(isValid);
    }
  };

  const onTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    const [hours, minutes] = e.target.value.split(':');
    if (control.value) {
      const result = new Date(control.value);
      if (result.getTime()) {
        result.setHours(parseInt(hours, 10));
        result.setMinutes(parseInt(minutes, 10));
        if (result.getTime()) {
          onChange(result);
          isValid = true;
        }
      }
    }
    if (valid !== isValid) {
      setValid(isValid);
    }
  };
  const { datePicker = true, timePicker = true } = control;
  return name ? (
    <Box css={{ display: 'flex', flexDirection: 'column' }}>
      {datePicker && (
        <Input
          css={{
            flex: 1,
          }}
          type="date"
          max="9999-12-31" // I do this because of a rendering bug in chrome
          ref={dateInputRef as RefObject<HTMLInputElement>}
          id={`${name}date`}
          name={`${name}date`}
          onChange={onDateChange}
        />
      )}
      {timePicker && (
        <Input
          css={{
            flex: 1,
          }}
          type="time"
          id={`${name}time`}
          name={`${name}time`}
          ref={timeInputRef as RefObject<HTMLInputElement>}
          onChange={onTimeChange}
        />
      )}
    </Box>
  ) : null;
};

addPropertyEditor(ControlTypes.DATE, DateEditor);
