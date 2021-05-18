/* eslint-disable react/display-name */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import { Column } from '@component-controls/components';
import {
  StoryContextProvider,
  ControlsContextStoryProvider,
} from '@component-controls/store';
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
  /**
   * if true, will flatten the group by
   */
  flat?: boolean;
}
export type PropsTableProps = PropsTableOwnProps &
  Omit<ComponentsBlockContainerProps, 'children'>;

const NAME = 'propstable';

/**
 * Displays the component's properties as well as configurable controls to interact with the component.
 */
export const PropsTable: FC<PropsTableProps> = props => {
  const custom = useCustomProps<PropsTableProps>(NAME, props);
  const { extraColumns = [], visibility = 'all', flat, ...rest } = custom;

  return (
    <ComponentsBlockContainer
      data-testid={NAME}
      visibility={visibility}
      {...rest}
    >
      {(component, tableProps, story) => {
        const table = (
          <BasePropsTable
            component={component}
            visibility={visibility}
            extraColumns={extraColumns}
            tableProps={tableProps}
            flat={flat}
          />
        );
        return story ? (
          <StoryContextProvider storyId={story.id}>
            <ControlsContextStoryProvider>{table}</ControlsContextStoryProvider>
          </StoryContextProvider>
        ) : (
          table
        );
      }}
    </ComponentsBlockContainer>
  );
};

export { PropsTable as Props };
