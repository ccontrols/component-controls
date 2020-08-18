import React from 'react';
import { RunOnlyConfiguration, defaultRunConfig } from "@component-controls/core";
import { ViewportPage } from "@component-controls/viewport-plugin";

const config: RunOnlyConfiguration = {
  siteTitle: `awLib`,
  siteDescription: `Some description meta.`,
  author: 'my name',
  pages: {
    story: {
      tabs: [
        ...defaultRunConfig.pages.story.tabs,
        { title: 'Viewport', render: () => <ViewportPage /> },
      ],
    },
  },

};

export default config;