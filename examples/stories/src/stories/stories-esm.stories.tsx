import React from 'react';
import { Document, Example } from '@component-controls/core';
import { customStory } from './external/external-story';
import { customStory as customStoryProps } from './external/external-story-props';
import { customStory as customStoryDeconstructedProps } from './external/external-story-deconstructed-props';

export default {
  title: 'ESM/ESM',
  author: 'atanasster',
  order: 5,
} as Document;

export const simple: Example = () => <div>test</div>;

simple.description = 'story with jsx child';

export const multipleChildren: Example = () => (
  <>
    <button>button 1</button>
    <button>button 2</button>
  </>
);

multipleChildren.description = 'story with two jsx children';

export const storyProps: Example<{ text: string }> = props => (
  <div>{props.text}</div>
);

storyProps.description = 'story with props';

storyProps.controls = { text: 'hello' };

export const storyDesconstructedProps: Example<{ text: string }> = ({
  text,
}) => <div>{text}</div>;

storyDesconstructedProps.description = 'story with deconstructed props';
storyDesconstructedProps.controls = { text: 'hello' };

export const externalStory: Example = customStory;

externalStory.description = 'story from external file';

export const externalStoryProps: Example = customStoryProps;

externalStoryProps.description = 'story from external file with props';
externalStoryProps.controls = { text: 'hello' };

export const externalStoryDeconstructedProps: Example<{
  text: string;
}> = customStoryDeconstructedProps;

externalStoryDeconstructedProps.description =
  'story from external file with deconstructed props';
externalStoryDeconstructedProps.controls = {
  text: 'hello',
};
