import React from 'react'
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, BlockContextProvider } from '@component-controls/storybook';
import { ControlsTable, Title, Subtitle, Story, Stories, Description, StorySource, ComponentSource, PropsTable } from '@component-controls/blocks';

addDecorator((story, ctx ) => {
  return (
    <ThemeProvider>
      {story(ctx)}
    </ThemeProvider>
  );
})

export const DocsPage = () => {
  return (
    <ThemeProvider>
      <BlockContextProvider>
        <Title />
        <Subtitle />
        <Description />
        <ComponentSource id="." title='Component source' />
        <Story id="." />
        <StorySource id="." title='Story source'/>
        <ControlsTable id="." />
        <PropsTable of="." />
        <Stories />
      </BlockContextProvider>  
    </ThemeProvider>  
  );
};
const categories = ['Storybook', 'Blocks', 'Editors', 'Components']
addParameters({
  docs: { page: DocsPage },
  dependencies: { hideEmpty: true },
  options: {
    storySort: (a, b) => {
      const aKind = a[1].kind.split('/')[0];
      const aIndex = categories.findIndex(c => c === aKind);
      const bKind = b[1].kind.split('/')[0];
      const bIndex = categories.findIndex(c => c === bKind);
      return aIndex - bIndex;
    },
  },
});