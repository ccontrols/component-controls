/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React, { FC } from 'react';
import {
  ComponentControls,
  ComponentControl,
} from '@component-controls/specification';
import {
  ActionContainer,
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from '@component-controls/components';
import {
  StoryBlockContainer,
  StoryBlockContainerProps,
} from '../BlockContainer/story';
import { useControlsActions } from './controlsActions';

import { BlockControlsContext } from '../context';
import { SingleControlsTable } from './SingleControlsTable';

export type ControlsTableProps = StoryBlockContainerProps;

const DEFAULT_GROUP_ID = 'Other';

interface GroupedControlsType {
  [key: string]: ComponentControls;
}

const createData = (controls: ComponentControls): any[] | undefined =>
  controls
    ? Object.keys(controls)
        .map((key, index) => ({
          name: key,
          control: {
            ...controls[key],
            order:
              controls[key].order === undefined ? index : controls[key].order,
          },
        }))
        .sort((a, b) => {
          const aOrder = a.control.order || 0;
          const bOrder = b.control.order || 0;
          return aOrder - bOrder;
        })
    : undefined;
/**
 * Table component to display a story's controls and their editors.
 * Can adapt to multiple groups of controls, displaying them in their own tabs.
 */
export const ControlsTable: FC<ControlsTableProps> = (
  props: ControlsTableProps,
) => {
  const { setControlValue, clickControl } = React.useContext(
    BlockControlsContext,
  );
  return (
    <StoryBlockContainer {...props}>
      {(context, rest) => {
        const { story, id: storyId } = context;
        const { controls } = story || {};
        const controlsActions = useControlsActions({
          controls,
          storyId,
          setControlValue,
        });
        if (controls && Object.keys(controls).length) {
          const groupped: GroupedControlsType = Object.keys(controls)
            .filter(k => {
              const p: ComponentControl = controls[k];
              return p.type && !p.hidden;
            })
            .reduce((acc: GroupedControlsType, k: string) => {
              const groupId = controls[k].groupId || DEFAULT_GROUP_ID;
              return {
                ...acc,
                [groupId]: { ...acc[groupId], [k]: controls[k] },
              };
            }, {});
          const groupedItems = Object.keys(groupped)
            .sort()
            .map(key => {
              return {
                label: key,
                controls: groupped[key],
              };
            });
          if (groupedItems.length === 0) {
            return null;
          }

          return (
            <ActionContainer actions={controlsActions}>
              <Box
                sx={{
                  pt: 4,
                }}
              >
                {groupedItems.length === 1 ? (
                  <SingleControlsTable
                    {...rest}
                    setControlValue={setControlValue}
                    clickControl={clickControl}
                    storyId={storyId}
                    data={createData(groupedItems[0].controls)}
                  />
                ) : (
                  <Tabs>
                    <TabList>
                      {groupedItems.map(item => (
                        <Tab key={`tab_${item.label}`}>{item.label}</Tab>
                      ))}
                    </TabList>
                    {groupedItems.map(item => (
                      <TabPanel key={`tab_panel_${item.label}`}>
                        <SingleControlsTable
                          {...rest}
                          setControlValue={setControlValue}
                          clickControl={clickControl}
                          storyId={storyId}
                          data={createData(item.controls)}
                        />
                      </TabPanel>
                    ))}
                  </Tabs>
                )}
              </Box>
            </ActionContainer>
          );
        }
        return null;
      }}
    </StoryBlockContainer>
  );
};
