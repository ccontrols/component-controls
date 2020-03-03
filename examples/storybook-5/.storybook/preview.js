import React from 'react'
import { addDecorator, addParameters } from '@storybook/react';
import { Title, Description as SBDescription, Subtitle, Story, Stories, Props } from '@storybook/addon-docs/blocks';
import { DependenciesTable } from 'storybook-addon-deps/blocks';
import { ControlsTable, ThemeProvider, Description, Source, ImportSource, BlockContextProvider } from '@component-controls/storybook';

addDecorator((story, ctx ) => {
  return (
    <ThemeProvider>
      {story(ctx)}
    </ThemeProvider>
  );
})

export const DocsPage = ({
  titleSlot,
  subtitleSlot,
  descriptionSlot,
  propsSlot,
  storiesSlot,
}) => {
  return (
    <BlockContextProvider>
      <Title slot={titleSlot} />
      <Subtitle slot={subtitleSlot} />
      <SBDescription slot={descriptionSlot} />
      <Description slot={descriptionSlot} />
      <ImportSource id="." title='Import component' />
      <Story id="." />
      <Source id="." title='Source code'/>
      <ControlsTable id="." />
      <Props slot={propsSlot} />
      <DependenciesTable titleDependencies='Dependencies' titleDependents='Dependents' />
      <Stories slot={storiesSlot} />
    </BlockContextProvider>  
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