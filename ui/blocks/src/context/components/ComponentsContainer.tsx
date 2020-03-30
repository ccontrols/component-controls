import React from 'react';
import { Story, StoryComponent } from '@component-controls/specification';

import { Tab, Tabs, TabList, TabPanel } from '@component-controls/components';
import { ComponentInputProps, useComponentsContext } from './ComponentsContext';

export type ComponentsContainerProps = {
  children: (
    component: StoryComponent,
    props: {
      story?: Story;
      tabName: string;
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
  const { components, story } = useComponentsContext({
    of,
  });
  if (!components) {
    return null;
  }
  const keys = Object.keys(components);
  if (keys.length === 0) {
    return null;
  }
  if (keys.length === 1) {
    return children(
      components[keys[0]],
      {
        story,
        tabName: keys[0],
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
          {children(components[key], { story, tabName: key }, rest)}
        </TabPanel>
      ))}
    </Tabs>
  );
};
