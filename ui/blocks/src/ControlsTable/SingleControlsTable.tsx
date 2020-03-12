/* eslint-disable react/display-name */
import React, { FC } from 'react';
import { getPropertyEditor, PropertyEditor } from '@component-controls/editors';
import { Table } from '@component-controls/components';
import { Flex } from 'theme-ui';
import { ControlsTableProps } from './ControlsTableProps';

const InvalidType = () => <span>Invalid Type</span>;

export const SingleControlsTable: FC<ControlsTableProps> = ({
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
