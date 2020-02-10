import React from 'react';
import {
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';
import styled from '@emotion/styled';
import { LoadedComponentControl } from '@component-controls/core';

import { getPropertyEditor } from './prop-factory';
import { FlexContainer } from './FlexContainer';
import { PropertyEditor } from './types';

const StyledTR = styled.tr<{}>(({ theme }) => ({
  //@ts-ignore
  ...theme?.styles?.tr,
}));

const StyledTD = styled.td<{}>(({ theme }) => ({
  //@ts-ignore
  ...theme?.styles?.td,
}));

const InvalidType = () => <span>Invalid Type</span>;

interface PropertyEditorRowProps {
  prop: LoadedComponentControl;
  name: string;
  storyId?: string;
  setControlValue?: SetControlValueFn;
  clickControl?: ClickControlFn;
}

export const PropertyEditorRow: React.FunctionComponent<PropertyEditorRowProps> = ({
  prop,
  name,
  setControlValue,
  clickControl,
  storyId,
}) => {
  const InputType: PropertyEditor = getPropertyEditor(prop.type) || InvalidType;
  const onChange = (propName: string, value: any) => {
    if (setControlValue && storyId) {
      setControlValue(storyId, propName, value);
    }
  };
  const onClick = () => {
    if (clickControl && storyId) {
      clickControl(storyId, name);
    }
  };
  return (
    <StyledTR>
      <StyledTD>{!prop.hideLabel ? prop.label || name : null}</StyledTD>
      <StyledTD>
        <FlexContainer align="left">
          <InputType
            prop={prop}
            name={name}
            onChange={onChange}
            onClick={onClick}
          />
        </FlexContainer>
      </StyledTD>
    </StyledTR>
  );
};
