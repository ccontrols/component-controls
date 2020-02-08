import React, { MouseEvent } from 'react';
import { window, document } from 'global';
import { transparentize } from 'polished';
import { styled, Theme } from '@storybook/theming';
import qs from 'qs';
import copy from 'copy-to-clipboard';
import {
  resetControlValues,
  getControlValues,
  LoadedComponentControls,
  LoadedComponentControl,
} from '@component-controls/core';

import { Table, TabsState, ActionBar } from '@storybook/components';
import { ControlsEditorsTableProps } from './types';

import { PropertyEditorRow } from './PropEditorRow';

export const getSectionTitleStyle: (theme: Theme) => object = (
  theme: Theme,
) => ({
  letterSpacing: '0.35em',
  textTransform: 'uppercase',
  fontWeight: theme.typography.weight.black,
  fontSize: theme.typography.size.s1 - 1,
  lineHeight: '24px',
  color:
    theme.base === 'light'
      ? transparentize(0.4, theme.color.defaultText)
      : transparentize(0.6, theme.color.defaultText),
  background: `${theme.background.app} !important`,
});

export const getBlockBackgroundStyle: (theme: Theme) => object = (
  theme: Theme,
) => ({
  borderRadius: theme.appBorderRadius,
  background: theme.background.content,
  boxShadow:
    theme.base === 'light'
      ? 'rgba(0, 0, 0, 0.10) 0 1px 3px 0'
      : 'rgba(0, 0, 0, 0.20) 0 2px 5px 0',
  border: `1px solid ${theme.appBorderColor}`,
});

const StyleTable = styled(Table)<{}>(() => ({
  '&&': {
    margin: 0,
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

const PropEditorsContainer = styled.div<{}>(({ theme }) => ({
  position: 'relative',
  paddingBottom: '25px',
  ...getBlockBackgroundStyle(theme),
}));

const PropEditorsTitle = styled.div<{}>(({ theme }) => ({
  ...getSectionTitleStyle(theme),
  padding: '16px',
}));

const DEFAULT_GROUP_ID = 'Other';

export const BlockWrapper: React.FC = ({ children }) => (
  <PropEditorsContainer className="docblock-propeditorsblock">
    {' '}
    {children}
  </PropEditorsContainer>
);

const PropGroupTable: React.FC<ControlsEditorsTableProps> = ({
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

export const ControlsEditorsTable: React.FC<ControlsEditorsTableProps & {
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
    return (
      <BlockWrapper>
        {title && <PropEditorsTitle>{title}</PropEditorsTitle>}
        {Object.keys(groupped).length < 2 ? (
          <PropGroupTable {...props} />
        ) : (
          <TabsState>
            {Object.keys(groupped)
              .sort()
              .map(key => {
                const group: LoadedComponentControls = groupped[key];
                const tabId = `prop_editors_div_${props.storyId}_${key}`;
                return (
                  <div key={tabId} id={tabId} title={key}>
                    {({ active }: { active: boolean }) =>
                      active ? (
                        <PropGroupTable
                          key={tabId}
                          {...{ ...props, controls: group }}
                        />
                      ) : null
                    }
                  </div>
                );
              })}
          </TabsState>
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
        />
      </BlockWrapper>
    );
  }
  return null;
};
