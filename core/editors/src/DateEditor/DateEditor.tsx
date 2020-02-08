import React, { ChangeEvent } from 'react';
import { styled } from '@storybook/theming';
import { ComponentControlDate } from '@component-controls/specification';
import { Form } from '@storybook/components';
import { PropertyControlProps, PropertyEditor } from '../types';

const FlexSpaced = styled.div({
  flex: 1,
  display: 'flex',
  '&& > *': {
    marginLeft: 10,
  },
  '&& > *:first-of-type': {
    marginLeft: 0,
  },
});

const FlexInput = styled(Form.Input)({ flex: 1 });

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

interface DateEditorProps extends PropertyControlProps {
  prop: ComponentControlDate;
}

export const DateEditor: PropertyEditor<DateEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
  const [valid, setValid] = React.useState(true);
  const dateInputRef = React.useRef<HTMLInputElement>();
  const timeInputRef = React.useRef<HTMLInputElement>();
  React.useEffect(() => {
    if (valid !== false) {
      if (dateInputRef && dateInputRef.current) {
        dateInputRef.current.value = formatDate(prop.value);
      }
      if (timeInputRef && timeInputRef.current) {
        timeInputRef.current.value = formatTime(prop.value);
      }
    }
  }, [prop.value]);

  const onDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    let isValid = false;
    const [year, month, day] = e.target.value.split('-');
    if (prop.value) {
      const result = new Date(prop.value);
      if (result.getTime()) {
        result.setFullYear(parseInt(year, 10));
        result.setMonth(parseInt(month, 10) - 1);
        result.setDate(parseInt(day, 10));
        if (result.getTime()) {
          isValid = true;
          onChange(name, result);
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
    if (prop.value) {
      const result = new Date(prop.value);
      if (result.getTime()) {
        result.setHours(parseInt(hours, 10));
        result.setMinutes(parseInt(minutes, 10));
        if (result.getTime()) {
          onChange(name, result);
          isValid = true;
        }
      }
    }
    if (valid !== isValid) {
      setValid(isValid);
    }
  };
  const { datePicker = true, timePicker = true } = prop;
  return name ? (
    <FlexSpaced style={{ display: 'flex' }}>
      {datePicker && (
        <FlexInput
          type="date"
          max="9999-12-31" // I do this because of a rendering bug in chrome
          ref={dateInputRef}
          id={`${name}date`}
          name={`${name}date`}
          onChange={onDateChange}
        />
      )}
      {timePicker && (
        <FlexInput
          type="time"
          id={`${name}time`}
          name={`${name}time`}
          ref={timeInputRef}
          onChange={onTimeChange}
        />
      )}
      {!valid ? <div>invalid</div> : null}
    </FlexSpaced>
  ) : null;
};
