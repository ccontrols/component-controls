import React, { FC, useState } from 'react';
import {
  BlockContainer,
  BlockContainerProps,
  ActionItem,
} from '@component-controls/components';
import { PropsTable, PropsTableProps } from '../PropsTable';

export type BlockPropsTableProps = PropsTableProps & BlockContainerProps;

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
  return (
    <BlockContainer actions={allActions} title={title}>
      <PropsTable
        css={{
          'thead :first-of-type': {
            marginTop: 15,
          },
        }}
        filtering={filtering}
        {...rest}
      />
    </BlockContainer>
  );
};
