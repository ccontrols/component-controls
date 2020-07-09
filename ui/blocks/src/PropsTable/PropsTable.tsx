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

/**
 * Displays the component's properties as well as configurable controls to interact with the component.
 */
export const PropsTable: FC<PropsTableProps> = ({
  extraColumns = [],
  visibility = 'all',
  ...props
}) => {
  return (
    <ComponentsBlockContainer visibility={visibility} {...props}>
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
