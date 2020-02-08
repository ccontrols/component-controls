import React from 'react';
import { darken } from 'polished';
import { styled } from '@storybook/theming';
import { WithTooltipPure, Button, Icons } from '@storybook/components';
import {
  ComponentControl,
  ComponentControlObject,
} from '@component-controls/specification';
import { mergeControlValues, getControlValues } from '@component-controls/core';
import { PropertyControlProps, PropertyEditor } from '../types';
import { FlexContainer } from '../FlexContainer';
import { getPropertyEditor } from '../prop-factory';

export interface ObjectEditorProps extends PropertyControlProps {
  prop: ComponentControlObject;
}

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.color.defaultText,
  backgroundColor: darken(0.1, theme.color.light),
}));

const StyledIcon = styled(Icons)(() => ({
  marginLeft: '10px',
}));

const ChildContainer = styled.div(() => ({
  minWidth: 200,
  maxWidth: 800,
  padding: 15,
  boxSizing: 'content-box',
}));

export const ObjectEditor: PropertyEditor<ObjectEditorProps> = ({
  prop,
  name,
  onChange,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (childName: string, value: any) => {
    onChange(
      name,
      getControlValues(mergeControlValues(prop.value as any, childName, value)),
    );
  };
  let children;
  if (typeof prop.value === 'object') {
    children = Object.keys(prop.value)
      .map(key => {
        const childProp: ComponentControl = prop.value
          ? (prop.value[key] as any)
          : null;
        if (!childProp) {
          return null;
        }
        return {
          name: key,
          prop: childProp,
          node: getPropertyEditor(childProp.type),
        };
      })
      .filter(p => p && p.node);
  }
  return (
    <WithTooltipPure
      closeOnClick
      trigger="click"
      placement="bottom"
      tooltipShown={isOpen}
      onVisibilityChange={isVisible => {
        setIsOpen(isVisible);
      }}
      tooltip={
        <ChildContainer>
          <table>
            <tbody>
              {children &&
                children.map(child =>
                  child ? (
                    <tr key={`editor_${child.name}`}>
                      <td>{child.prop.label || child.name}</td>
                      <td>
                        <child.node
                          name={child.name}
                          prop={child.prop}
                          onChange={handleChange}
                        />
                      </td>
                    </tr>
                  ) : null,
                )}
            </tbody>
          </table>
        </ChildContainer>
      }
    >
      <FlexContainer>
        <StyledButton>
          Edit object
          <StyledIcon icon={isOpen ? 'arrowup' : 'arrowdown'} />
        </StyledButton>
      </FlexContainer>
    </WithTooltipPure>
  );
};
