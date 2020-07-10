/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';

import { TableProps } from '@component-controls/components';
import { Column } from 'react-table';
import {
  ComponentsBlockContainer,
  ComponentsBlockContainerProps,
} from '../BlockContainer/components/ComponentsBlockContainer';
import { useCustomProps } from '../context';
import { BasePropsTable } from './BasePropsTable';

export interface PropsTableOwnProps {
  /**
   * extra custom columns passed to the PropsTable.
   */
  extraColumns?: Column[];
}
export type PropsTableProps = PropsTableOwnProps &
  Omit<ComponentsBlockContainerProps, 'children'> &
  Omit<TableProps, 'columns' | 'data'>;

const NAME = 'propstable';

/**
 * Displays the component's properties as well as configurable controls to interact with the component.
 */
export const PropsTable: FC<PropsTableProps> = props => {
  const custom = useCustomProps<PropsTableProps>(NAME, props);
  const { extraColumns = [], visibility = 'all', ...rest } = custom;

  return (
    <ComponentsBlockContainer
      data-testid={NAME}
      visibility={visibility}
      {...rest}
    >
      {(component, { story }, tableProps) => (
        <BasePropsTable
          component={component}
          story={story}
          visibility={visibility}
          extraColumns={extraColumns}
          tableProps={tableProps}
        />
      )}
    </ComponentsBlockContainer>
  );
};
