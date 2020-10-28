import React from 'react';
import { ProjectIcon } from '@primer/octicons-react';
import { Flex } from 'theme-ui';
import { Example, ControlTypes } from '@component-controls/core';
import { ThemeProvider } from '../ThemeContext';
import { Sidebar, SidebarContext, SidebarContextProvider } from '.';

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
};

export const overview: Example = ({
  collapsible,
}: {
  collapsible: boolean;
}) => (
  <ThemeProvider>
    <SidebarContextProvider collapsible={collapsible}>
      <SidebarContext.Consumer>
        {({ SidebarToggle }) => (
          <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
            <SidebarToggle />
            <Sidebar>
              <ul>
                <li>item 1</li>
                <li>item 2</li>
                <li>item 3</li>
              </ul>
            </Sidebar>
          </Flex>
        )}
      </SidebarContext.Consumer>
    </SidebarContextProvider>
  </ThemeProvider>
);

overview.controls = {
  collapsible: { type: ControlTypes.BOOLEAN, value: true },
};

export const title: Example = () => (
  <ThemeProvider>
    <SidebarContextProvider>
      <div style={{ border: '1px solid black' }}>
        <SidebarContext.Consumer>
          {({ SidebarToggle }) => (
            <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
              <SidebarToggle />

              <Sidebar title="Title">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </Sidebar>
            </Flex>
          )}
        </SidebarContext.Consumer>
      </div>
    </SidebarContextProvider>
  </ThemeProvider>
);

export const icon: Example = () => (
  <ThemeProvider>
    <SidebarContextProvider>
      <div style={{ border: '1px solid black' }}>
        <SidebarContext.Consumer>
          {({ SidebarToggle }) => (
            <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
              <SidebarToggle icon={<ProjectIcon />} />
              <Sidebar title="Title">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </Sidebar>
            </Flex>
          )}
        </SidebarContext.Consumer>
      </div>
    </SidebarContextProvider>
  </ThemeProvider>
);

export const buttonProps: Example = () => (
  <ThemeProvider>
    <SidebarContextProvider>
      <div style={{ border: '1px solid black' }}>
        <SidebarContext.Consumer>
          {({ SidebarToggle }) => (
            <Flex css={{ flexDirection: 'row', alignItems: 'start' }}>
              <SidebarToggle aria-label="click to expand/collapse" />
              <Sidebar title="Title">
                <ul>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                </ul>
              </Sidebar>
            </Flex>
          )}
        </SidebarContext.Consumer>
      </div>
    </SidebarContextProvider>
  </ThemeProvider>
);
