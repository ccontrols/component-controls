import React, { FC } from 'react'
import { addDecorator, addParameters } from '@storybook/react';
import { Title, Subtitle, Source, Story, Stories, Props, Description } from '@storybook/addon-docs/blocks';
import { getControlValues } from '@component-controls/core';
import { polaris as theme} from '@theme-ui/presets';
import { ThemeProvider } from 'theme-ui';
import { lighten } from 'polished';
import { DependenciesTable } from 'storybook-addon-deps/blocks';
import { ControlsEditorsTable } from '@component-controls/storybook';


addDecorator((story, ctx ) => {
  const { controls } = ctx.parameters || {};

  return (
    <ThemeProvider theme={{
      ...theme,
      styles: {
        ...theme.styles,
        table: {
          margin: 0,
          borderCollapse: 'collapse',
          fontSize: '14px',
          lineHeight: '20px',
          textAlign: 'left',
          width: '100%',
          borderSpacing: '0px',
        },
        td: {
          paddingTop: '16px',
          paddingBottom: '16px',
          paddingLeft: '20px',
        },
        tr: {
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
        },

      },
      buttons: {
        primary: {
          color: '#333',
          bg: '#f3f3f3',
          borderRadius: 5,
          boxShadow: 'rgba(0, 0, 0, 0.1) 0px 0px 0px 1px inset',
        },
        secondary: {
          bg: 'highlight',
         }  
      },
      colors: {
        ...theme.colors,
        accent: '#1EA7FD',
        fadedText: lighten(0.25, theme.colors.text),
        lightenPrimary: lighten(0.4, theme.colors.primary),

      },
    }}>
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