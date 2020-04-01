/* eslint-disable react/display-name */
import React, { FC } from 'react';
import {
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';
import { getPropertyEditor, PropertyEditor } from '@component-controls/editors';
import { Table } from '@component-controls/components';
import { Flex } from 'theme-ui';
import { InvalidType } from '../notifications/InvalidType';

export interface SingleControlsTableProps {
  /**
   * component controls to display in the table.
   */
  data?: any[];
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
  clickControl?: ClickControlFn;
}

/**
 * Single table of controls, without specific handliong of groups.
 * The controls and storyId are already set in priops;
 */
export const SingleControlsTable: FC<SingleControlsTableProps> = ({
  data,
  storyId,
  setControlValue,
  clickControl,
}) => {
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  React.useEffect(() => {
    setSkipPageReset(false);
  }, [data]);

  const columns = React.useMemo(
    () => [
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
              setSkipPageReset(true);
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
    ],
    [],
  );

  return (
    <Table
      skipPageReset={skipPageReset}
      key={data?.reduce((acc: string, { name }) => `${acc}-${name}}`, '')}
      className="component-controls-table"
      header={false}
      columns={columns}
      data={data}
    />
  );
};
