import React, { FC } from 'react'
import { addDecorator, addParameters } from '@storybook/react';
import { Title, Subtitle, Source, Story, Stories, Props, Description } from '@storybook/addon-docs/blocks';
import { getControlValues } from '@component-controls/core';
import { DependenciesTable } from 'storybook-addon-deps/blocks';
import { ControlsEditorsTable, ThemeProvider } from '@component-controls/storybook';

addDecorator((story, ctx ) => {
  const { controls } = ctx.parameters || {};
  return (
    <ThemeProvider>
      {story(getControlValues(controls))}
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