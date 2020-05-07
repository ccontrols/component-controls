import React, { FC } from 'react';
import { Button, Box, Flex } from 'theme-ui';
import deepmerge from 'deepmerge';
import Octicon, { Trashcan, PlusSmall } from '@primer/octicons-react';
import {
  ComponentControl,
  ComponentControlArray,
  ControlTypes,
} from '@component-controls/specification';
import { newControlValues } from '@component-controls/core';

import { Popover } from '@component-controls/components';
import { PropertyEditor, PropertyControlProps } from '../types';
import { useControlContext, ConrolsContextProvider } from '../context';
import { addPropertyEditor, getPropertyEditor } from '../prop-factory';

const ChildContainer: FC = props => (
  <Box
    css={{
      maxWidth: 800,
      padding: 15,
      boxSizing: 'content-box',
    }}
    {...props}
  />
);

export interface ArrayEditorProps extends PropertyControlProps {
  /**
   * label for the editor button.
   */
  editLabel?: string;
}
/**
 * Array control editor.
 *
 */
export const ArrayEditor: PropertyEditor<ArrayEditorProps> = ({
  name,
  editLabel = 'edit...',
}) => {
  const { control, onChange, onClick } = useControlContext<
    ComponentControlArray
  >({ name });
  const { editLabel: controlEditLabel } = control;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleChange = (rowIndex: number, propName: string, value: any) => {
    if (Array.isArray(control.value)) {
      onChange(
        name,
        control.value.map((row, index) =>
          rowIndex === index ? { ...row, [propName]: value } : row,
        ),
      );
    }
  };
  const handleOnDelete = (rowIndex: number) => {
    if (Array.isArray(control.value)) {
      onChange(
        name,
        control.value.filter((row, index) => index !== rowIndex),
      );
    }
  };
  const handleOnAdd = () => {
    if (Array.isArray(control.value)) {
      onChange(name, [...control.value, newControlValues(control.rowType)]);
    }
  };
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
          <table>
            <thead>
              <tr>
                {control.rowType &&
                  Object.keys(control.rowType).map(key => (
                    <th key={`head_${key}`}>
                      {control.rowType[key].label || key}
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              {Array.isArray(control.value) &&
                control.value.map((row, idx) => (
                  <tr key={`array_row_${idx}`}>
                    {typeof row === 'object' &&
                      Object.keys(control.rowType)
                        .map(key => {
                          const Editor: PropertyEditor = getPropertyEditor(
                            control.rowType[key].type,
                          );

                          return Editor ? (
                            <td key={`row_data_${idx}_${key}`}>
                              <Flex>
                                <ConrolsContextProvider
                                  controls={{
                                    [key]:
                                      control.rowType[key].type ===
                                      ControlTypes.OBJECT
                                        ? deepmerge<ComponentControl>(
                                            control.rowType[key],
                                            {
                                              value: Object.keys(
                                                row[key],
                                              ).reduce(
                                                (a, k) => ({
                                                  ...a,
                                                  [k]: {
                                                    value: row[key]
                                                      ? row[key][k]
                                                      : {},
                                                  },
                                                }),
                                                {},
                                              ),
                                            },
                                          )
                                        : deepmerge<ComponentControl>(
                                            control.rowType[key],
                                            {
                                              value: row[key],
                                            },
                                          ),
                                  }}
                                  onChange={(propName: string, value: any) =>
                                    handleChange(idx, propName, value)
                                  }
                                  onClick={onClick}
                                >
                                  <Editor name={key} />
                                </ConrolsContextProvider>
                              </Flex>
                            </td>
                          ) : null;
                        })
                        .filter(r => r)}
                    <td>
                      <Button
                        onClick={() => handleOnDelete(idx)}
                        aria-label="delete row"
                      >
                        <Octicon icon={Trashcan} />
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <Button onClick={handleOnAdd} aria-label="add new row">
            <Octicon icon={PlusSmall} />
            {` `}
            Add row
          </Button>
        </ChildContainer>
      )}
    >
      <Button aria-label="edit the properties of the array">
        {controlEditLabel || editLabel}
        <Box />
      </Button>
    </Popover>
  );
};

addPropertyEditor(ControlTypes.ARRAY, ArrayEditor);
