import React from 'react';
import { ControlTypes } from '@component-controls/core';
import { useControlSelector } from '../state';
import { ButtonEditor } from './ButtonEditor';

export default {
  title: 'Editors/ButtonEditor',
  component: ButtonEditor,
};

export const overview = () => {
  const selector = useControlSelector(
    {
      prop: {
        type: ControlTypes.BUTTON,
        onClick: () => console.log('clicked'),
      },
    },
    () => {},
  );

  return <ButtonEditor name="Check in console" selector={selector} />;
};
