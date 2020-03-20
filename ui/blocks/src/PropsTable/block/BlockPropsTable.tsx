import React, { FC, useState } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
  ActionContainer,
  ActionContainerProps,
  ActionItem,
} from '@component-controls/components';
import { PropsTable, PropsTableProps } from '../plain';

export type BlockPropsTableProps = PropsTableProps &
  BlockContainerProps &
  ActionContainerProps;

export const BlockPropsTable: FC<BlockPropsTableProps> = ({
  title,
  actions,
  ...rest
}) => {
  const [filtering, setFiltering] = useState(false);
  const allActions: ActionItem[] = [];

  allActions.push({
    title: 'filter',
    onClick: () => setFiltering(!filtering),
  });
  if (actions) {
    allActions.push.apply(allActions, actions);
  }
  // add some padding for the actions bar
  const propsTable = <PropsTable filtering={filtering} {...rest} />;
  return propsTable ? (
    <BlockContainer title={title}>
      <ActionContainer actions={allActions}>{propsTable}</ActionContainer>
    </BlockContainer>
  ) : null;
};
