import React, { FC } from 'react'
import { addDecorator, addParameters } from '@storybook/react';
import { Title, Subtitle, Story, Stories, Props, Description } from '@storybook/addon-docs/blocks';
import { DependenciesTable } from 'storybook-addon-deps/blocks';
import { ControlsEditorsTable, ThemeProvider, Source } from '@component-controls/storybook';

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
    <>
      <Title slot={titleSlot} />
      <Subtitle slot={subtitleSlot} />
      <Description slot={descriptionSlot} />
      <Story id="." />
      <Source id="." />
      <ControlsEditorsTable id="." />
      <Props slot={propsSlot} />
      <DependenciesTable titleDependencies='Dependencies' titleDependents='Dependents' />
      <Stories slot={storiesSlot} />
    </>
  );
};
const categories = ['Table', 'Editors', 'Components']
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