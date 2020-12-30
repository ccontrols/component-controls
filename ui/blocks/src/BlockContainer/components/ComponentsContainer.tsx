import React, { Fragment, ReactElement, FC } from 'react';
import { Component, Components } from '@component-controls/core';

import { Tab, Tabs, TabList, TabPanel } from '@component-controls/components';

export type ComponentsContainerProps = {
  children: (component: Component, props: any) => ReactElement | null;

  components: Components;
  /**
   * callback to be called when the tab changes
   * if the function returns false, it can stop chabging to the new tab
   */
  onSelect?: (name: string, component: Component) => boolean | void;
};

export const ComponentsContainer: FC<ComponentsContainerProps> = ({
  components,
  children,
  onSelect,
  ...rest
}) => {
  const keys = components ? Object.keys(components) : [];
  if (keys.length === 0) {
    keys.push('Controls');
  }

  if (keys.length <= 1) {
    return <Fragment>{children(components[keys[0]], rest)}</Fragment>;
  }
  return (
    <Tabs
      onSelect={
        onSelect
          ? (index: number) => {
              return onSelect(keys[index], components[keys[index]]);
            }
          : undefined
      }
    >
      <TabList>
        {keys.map(key => (
          <Tab key={`component_tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {keys.map(key => (
        <TabPanel key={`component_panel_${key}`}>
          {children(components[key], rest)}
        </TabPanel>
      ))}
    </Tabs>
  );
};
