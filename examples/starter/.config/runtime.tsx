import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { TestingPage } from "./TestingPage";

const config: RunOnlyConfiguration = {
  title: `awLib`,
  description: `Some description meta.`,
  author: 'my name',
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Testing', render: () => <TestingPage /> },
      ],
    },
  },

};

export default config;