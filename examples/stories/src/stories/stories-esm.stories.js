import React from 'react';
import { customStory } from './external/external-story';
import { customStory as customStoryProps } from './external/external-story-props';
import { customStory as customStoryDeconstructedProps } from './external/external-story-deconstructed-props';

export default {
  title: 'Introduction/ESM',
  author: 'atanasster',
};

export const simple = () => <div>test</div>;

simple.description = 'story with jsx child';

export const multipleChildren = () => (
  <>
    <button>button 1</button>
    <button>button 2</button>
  </>
);

multipleChildren.description = 'story with two jsx children';

export const storyProps = props => <div>{props.text}</div>;

storyProps.description = 'story with props';

storyProps.controls = { text: { type: 'text', value: 'hello' } };

export const storyDesconstructedProps = ({ text }) => <div>{text}</div>;

storyDesconstructedProps.description = 'story with deconstructed props';
storyDesconstructedProps.controls = { text: { type: 'text', value: 'hello' } };

export const externalStory = customStory;

externalStory.description = 'story from external file';

export const externalStoryProps = customStoryProps;

externalStoryProps.description = 'story from external file with props';
externalStoryProps.controls = { text: { type: 'text', value: 'hello' } };

export const externalStoryDeconstructedProps = customStoryDeconstructedProps;

externalStoryDeconstructedProps.description =
  'story from external file with deconstructed props';
externalStoryDeconstructedProps.controls = {
  text: { type: 'text', value: 'hello' },
};
