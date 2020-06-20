import React from 'react';
import { Story, StoryComponent, PackageInfo } from '@component-controls/core';
import { Tab, Tabs, TabList, TabPanel } from '@component-controls/components';
import { ComponentInputProps, useComponentsContext } from './ComponentsContext';

export type ComponentsContainerProps = {
  children: (
    component: StoryComponent | undefined,
    props: {
      story?: Story;
      componentPackage?: PackageInfo;
      tabName?: string;
    },
    rest: any,
  ) => React.ReactElement | null;
  /**
   * callback to be called when the tab changes
   * if the function returns false, it can stop chabging to the new tab
   */
  onSelect?: (name: string, component: StoryComponent) => boolean | void;
} & ComponentInputProps;

export const ComponentsContainer: React.FC<ComponentsContainerProps> = ({
  of,
  children,
  onSelect,
  ...rest
}) => {
  const { components, story, componentPackage } = useComponentsContext({
    of,
  });
  const keys = components ? Object.keys(components) : [];
  if (keys.length === 0) {
    keys.push('Controls');
  }

  if (keys.length <= 1) {
    return children(
      components ? components[keys[0]] : undefined,
      {
        story,
        tabName: keys[0],
        componentPackage,
      },
      rest,
    );
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
          {children(
            components[key],
            { story, tabName: key, componentPackage },
            rest,
          )}
        </TabPanel>
      ))}
    </Tabs>
  );
};
