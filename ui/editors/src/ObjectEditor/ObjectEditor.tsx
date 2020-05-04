import React, { FC } from 'react';
import { Button, Box } from 'theme-ui';
import {
  ControlTypes,
  ComponentControl,
  ComponentControlObject,
} from '@component-controls/specification';
import { mergeControlValues, getControlValues } from '@component-controls/core';
import { Popover } from '@component-controls/components';
import { PropertyEditor } from '../types';
import { useControlContext, ConrolsContextProvider } from '../context';
import { PropertyEditors } from '../PropertyEditors';

const ChildContainer: FC = props => (
  <Box
    css={{
      minWidth: 200,
      maxWidth: 800,
      padding: 15,
      boxSizing: 'content-box',
    }}
    {...props}
  />
);

/**
 * Object control editor.
 */

export const ObjectEditor: PropertyEditor = ({ name }) => {
  const { control, onChange, onClick } = useControlContext<
    ComponentControlObject
  >({ name });
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (childName: string, value: any) => {
    onChange(
      name,
      getControlValues(
        mergeControlValues(control.value as any, childName, value),
      ),
    );
  };
  let children: ({
    name: string;
    prop: ComponentControl;
    node: PropertyEditor;
  } | null)[];
  if (typeof control.value === 'object') {
    children = Object.keys(control.value)
      .map(key => {
        const childProp: ComponentControl = control.value
          ? (control.value[key] as any)
          : null;
        if (!childProp) {
          return null;
        }
        return {
          name: key,
          prop: childProp,
          node: AllPropertyEditors[childProp.type],
        };
      })
      .filter(p => p && p.node);
  }
  return (
    <Popover
      trigger="click"
      placement="bottom"
      tooltipShown={isOpen}
      onVisibilityChange={(isVisible: boolean) => {
        setIsOpen(isVisible);
      }}
      tooltip={() => (
        <ChildContainer>
          <ConrolsContextProvider
            controls={control.value || {}}
            onChange={handleChange}
            onClick={onClick}
          >
            <table>
              <tbody>
                {children &&
                  children.map(child =>
                    child ? (
                      <tr key={`editor_${child.name}`}>
                        <td>{child.prop.label || child.name}</td>
                        <td>
                          <child.node name={child.name} />
                        </td>
                      </tr>
                    ) : null,
                  )}
              </tbody>
            </table>
          </ConrolsContextProvider>
        </ChildContainer>
      )}
    >
      <Button aria-label="edit the properties of the object">
        Edit object
        <Box />
      </Button>
    </Popover>
  );
};

// avoid circular reference problem
export const AllPropertyEditors: {
  [name in ControlTypes]: PropertyEditor;
} = {
  ...PropertyEditors,
  [ControlTypes.OBJECT]: ObjectEditor,
};
