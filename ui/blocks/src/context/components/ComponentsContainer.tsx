import React from 'react';
import {
  Story,
  StoryComponent,
  SetControlValueFn,
  ClickControlFn,
} from '@component-controls/specification';

import { Tab, Tabs, TabList, TabPanel } from '@component-controls/components';
import { ComponentInputProps, useComponentsContext } from './ComponentsContext';

export type ComponentsContainerProps = {
  children: (
    component: StoryComponent,
    props: {
      story?: Story;
      setControlValue?: SetControlValueFn;
      clickControl?: ClickControlFn;
    },
  ) => React.ReactElement | null;
} & ComponentInputProps;

export const ComponentsContainer: React.FC<ComponentsContainerProps> = ({
  of,
  children,
}) => {
  const {
    components,
    story,
    setControlValue,
    clickControl,
  } = useComponentsContext({
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
    return children(components[keys[0]], {
      story,
      setControlValue,
      clickControl,
    });
  }
  return (
    <Tabs>
      <TabList>
        {keys.map(key => (
          <Tab key={`component_tab_${key}`}>{key}</Tab>
        ))}
      </TabList>
      {keys.map(key => (
        <TabPanel key={`component_panel_${key}`}>
          {children(components[key], { story, setControlValue, clickControl })}
        </TabPanel>
      ))}
    </Tabs>
  );
};
