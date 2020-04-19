/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React, { FC, MouseEvent } from 'react';
import { window, document } from 'global';
import qs from 'qs';
import copy from 'copy-to-clipboard';
import { ComponentControls } from '@component-controls/specification';
import {
  resetControlValues,
  getControlValues,
  LoadedComponentControls,
  LoadedComponentControl,
  randomizeData,
} from '@component-controls/core';
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

import { BlockControlsContext } from '../context';
import { SingleControlsTable } from './SingleControlsTable';

export type ControlsTableProps = StoryBlockContainerProps;

const DEFAULT_GROUP_ID = 'Other';

interface GroupedControlsType {
  [key: string]: LoadedComponentControls;
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
  const [copied, setCopied] = React.useState(false);
  const { setControlValue, clickControl } = React.useContext(
    BlockControlsContext,
  );
  return (
    <StoryBlockContainer {...props}>
      {(context, rest) => {
        const { story, id: storyId } = context;
        const { controls } = story || {};
        if (controls && Object.keys(controls).length) {
          const onReset = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            if (setControlValue && storyId) {
              const values = resetControlValues(controls);
              setControlValue(storyId, undefined, values);
            }
          };
          const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setCopied(true);
            const { location } = document;
            const query = qs.parse(location.search, {
              ignoreQueryPrefix: true,
            });
            const values = getControlValues(controls);
            Object.keys(values).forEach(key => {
              query[`controls-${key}`] = values[key];
            });

            copy(
              `${location.origin + location.pathname}?${qs.stringify(query, {
                encode: false,
              })}`,
            );
            window.setTimeout(() => setCopied(false), 1500);
          };
          const groupped: GroupedControlsType = Object.keys(controls)
            .filter(k => {
              const p: LoadedComponentControl = controls[k];
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
          const actionItems = [
            {
              title: copied ? 'copied' : 'copy',
              onClick: onCopy,
              id: 'copy',
              'aria-label': 'copy control values',
            },
            {
              title: 'reset',
              onClick: onReset,
              id: 'reset',
              'aria-label': 'reset control values to their initial value',
            },
            {
              title: 'randomize',
              onClick: () => {
                if (setControlValue && controls && storyId) {
                  setControlValue(storyId, undefined, randomizeData(controls));
                }
              },
              id: 'randomize',
              'aria-label': 'generate random values for the component controls',
            },
          ];
          return (
            <ActionContainer actions={actionItems}>
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
