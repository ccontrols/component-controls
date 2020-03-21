/* eslint-disable react/display-name */
import React, { FC } from 'react';
import {
  SetControlValueFn,
  ClickControlFn,
  ComponentControls,
} from '@component-controls/specification';
import { getPropertyEditor, PropertyEditor } from '@component-controls/editors';
import { Table } from '@component-controls/components';
import { Flex } from 'theme-ui';

const InvalidType = () => <span>Invalid Type</span>;

export interface SingleControlsTableProps {
  /**
   * componnet controls to display in the table.
   */
  controls?: ComponentControls;
  /**
   * storyId, will be used to update the values of the controls
   */
  storyId?: string;
  /**
   * generic function to update the values of component controls.
   */
  setControlValue?: SetControlValueFn;

  /**
   * generic function to propagate a click event for component controls.
   */
}

/**
 * Single table of controls, without specific handliong of groups.
 * The controls and storyId are already set in priops;
 */
export const SingleControlsTable: FC<SingleControlsTableProps> = ({
  controls,
  storyId,
  setControlValue,
  clickControl,
}) => (
  <Table
    className="component-controls-table"
    header={false}
    columns={[
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Editor',
        accessor: 'control',
        Cell: ({
          row: {
            original: { control, name },
          },
        }: any) => {
          const InputType: PropertyEditor =
            getPropertyEditor(control.type) || InvalidType;
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
            <Flex
              sx={{
                flexDirection: 'column',
                alignItems: 'left',
                flexBasis: '100%',
              }}
            >
              <InputType
                prop={control}
                name={name}
                onChange={onChange}
                onClick={onClick}
              />
            </Flex>
          );
        },
      },
    ]}
    data={
      controls
        ? Object.keys(controls)
            .map((key, index) => ({
              name: key,
              control: {
                ...controls[key],
                order:
                  controls[key].order === undefined
                    ? index
                    : controls[key].order,
              },
            }))
            .sort((a, b) => {
              const aOrder = a.control.order || 0;
              const bOrder = b.control.order || 0;
              return aOrder - bOrder;
            })
        : undefined
    }
  />
);
