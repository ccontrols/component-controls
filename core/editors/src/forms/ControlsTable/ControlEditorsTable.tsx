import React, { FC, MouseEvent } from 'react';
import { window, document } from 'global';
import styled from '@emotion/styled';
import { Theme } from 'theme-ui';
import qs from 'qs';
import copy from 'copy-to-clipboard';
import {
  resetControlValues,
  getControlValues,
  LoadedComponentControls,
  LoadedComponentControl,
} from '@component-controls/core';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ControlsEditorsTableProps } from '../../types';
import { ActionBar } from '../../components/ActionBar/ActionBar';

import { PropertyEditorRow } from './PropEditorRow';

const StyleTable = styled.table<{}>(({ theme }) => ({
  '&&': {
    //@ts-ignore
    ...theme?.styles?.table,
    tbody: {
      boxShadow: 'none',
    },
    'th:last-of-type, td:last-of-type': {
      width: '70%',
    },
  },
}));

const StyledActionBar = styled(ActionBar)<{}>(() => ({
  zIndex: 0,
}));

const PropEditorsContainer = styled.div<{}>(() => ({
  position: 'relative',
  paddingBottom: '25px',
  boxSadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px',
  borderRadius: 4,
  border: '1px solid rgba(0, 0, 0, 0.1)',
}));

const PropEditorsTitle = styled.div<{}>(({ theme }: { theme: Theme }) => ({
  padding: `${theme?.space?.[3]}px`,
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  //@ts-ignore
  fontWeight: theme?.fontWeights?.bold || 900,
  fontSize: '11px',
  color: `${theme?.colors?.fadedText}`,
  background: `${theme?.colors?.lightenPrimary}`,
}));

const DEFAULT_GROUP_ID = 'Other';

export const BlockWrapper: FC = ({ children }) => (
  <PropEditorsContainer> {children}</PropEditorsContainer>
);

const PropGroupTable: FC<ControlsEditorsTableProps> = ({
  controls,
  storyId,
  setControlValue,
  clickControl,
}) => (
  <StyleTable className="docblock-propeditorstable">
    <tbody>
      {controls &&
        Object.keys(controls)
          .map((key, index) => ({
            name: key,
            property: {
              ...controls[key],
              order:
                controls[key].order === undefined ? index : controls[key].order,
            },
          }))
          .sort((a, b) => {
            const aOrder = a.property.order || 0;
            const bOrder = b.property.order || 0;
            return aOrder - bOrder;
          })
          .map(p => (
            <PropertyEditorRow
              storyId={storyId}
              key={`prop_editor_row_${storyId}_${p.name}`}
              prop={p.property}
              name={p.name}
              setControlValue={setControlValue}
              clickControl={clickControl}
            />
          ))}
    </tbody>
  </StyleTable>
);

interface GroupedControlsType {
  [key: string]: LoadedComponentControls;
}

export const ControlsEditorsTable: FC<ControlsEditorsTableProps & {
  title?: string;
}> = props => {
  const [copied, setCopied] = React.useState(false);
  const {
    controls,
    title,
    storyId,
    setControlValue,
    extraActions = [],
  } = props;
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
        return !p.hidden;
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
    return (
      <BlockWrapper>
        {title && <PropEditorsTitle>{title}</PropEditorsTitle>}
        {Object.keys(groupped).length < 2 ? (
          <PropGroupTable {...props} />
        ) : (
          <Tabs>
            <TabList>
              {groupedItems.map(item => (
                <Tab key={`tab_${item.label}`}>{item.label}</Tab>
              ))}
            </TabList>
            {groupedItems.map(item => (
              <TabPanel key={`tab_panel_${item.label}`}>
                <PropGroupTable {...props} controls={item.controls} />
              </TabPanel>
            ))}
          </Tabs>
        )}
        <StyledActionBar
          actionItems={[
            ...extraActions.map(item => ({
              title: item.title,
              onClick: (e: MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                item.onAction(props);
              },
            })),
            { title: 'Reset', onClick: onReset },
            { title: copied ? 'Copied' : 'Copy', onClick: onCopy },
          ]}
        />{' '}
      </BlockWrapper>
    );
  }
  return null;
};
