/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import React, { FC, MouseEvent } from 'react';
import { window, document } from 'global';
import qs from 'qs';
import copy from 'copy-to-clipboard';
import {
  resetControlValues,
  getControlValues,
  LoadedComponentControls,
  LoadedComponentControl,
  randomizeData,
} from '@component-controls/core';
import {
  BlockContainer,
  Tab,
  Tabs,
  TabList,
  TabPanel,
} from '@component-controls/components';
import { ControlsTableProps } from './ControlsTableProps';
import { SingleControlsTable } from './SingleControlsTable';

const DEFAULT_GROUP_ID = 'Other';

interface GroupedControlsType {
  [key: string]: LoadedComponentControls;
}

export const ControlsTable: FC<ControlsTableProps & {
  title?: string;
}> = props => {
  const [copied, setCopied] = React.useState(false);
  const { controls, title, storyId, setControlValue } = props;
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
      const query = qs.parse(location.search, { ignoreQueryPrefix: true });
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
        return { ...acc, [groupId]: { ...acc[groupId], [k]: controls[k] } };
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
      { title: copied ? 'copied' : 'copy', onClick: onCopy },
      { title: 'reset', onClick: onReset },
      {
        title: 'randomize',
        onAction: (state: ControlsTableProps) => {
          if (state.setControlValue && state.controls && state.storyId) {
            state.setControlValue(
              state.storyId,
              undefined,
              randomizeData(state.controls),
            );
          }
        },
      },
    ];
    return (
      <BlockContainer actions={actionItems} title={title}>
        <Box
          sx={{
            pt: 4,
          }}
        >
          {groupedItems.length === 1 ? (
            <SingleControlsTable
              {...props}
              controls={groupedItems[0].controls}
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
                  <SingleControlsTable {...props} controls={item.controls} />
                </TabPanel>
              ))}
            </Tabs>
          )}
        </Box>
      </BlockContainer>
    );
  }
  return null;
};
