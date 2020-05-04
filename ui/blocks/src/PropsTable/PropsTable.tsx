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

import { SinglePropsTable } from './SinglePropsTable';

export interface PropsTableOwnProps {
  /**
   * extra custom columns passed to the PropsTable.
   */
  extraColumns?: Column[];
}
export type PropsTableProps = PropsTableOwnProps &
  Omit<ComponentsBlockContainerProps, 'children'> &
  Omit<TableProps, 'columns' | 'data'>;

export const PropsTable: FC<PropsTableProps> = ({
  extraColumns = [],
  ...props
}) => {
  return (
    <ComponentsBlockContainer visibleOnControlsOnly={true} {...props}>
      {(component, { story }, tableProps) => (
        <SinglePropsTable
          component={component}
          story={story}
          extraColumns={extraColumns}
          tableProps={tableProps}
        />
      )}
    </ComponentsBlockContainer>
  );
};
