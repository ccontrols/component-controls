import React from 'react';
import { customStory } from './external/external-story';
import { customStory as customStoryProps } from './external/external-story-props';
import { customStory as customStoryDeconstructedProps } from './external/external-story-deconstructed-props';

export default {
  title: 'Introduction/CSF',
};

export const simple = () => <div>test</div>;

simple.story = {
  description: 'story with jsx child',
};

export const multipleChildren = () => (
  <>
    <button>button 1</button>
    <button>button 2</button>
  </>
);

multipleChildren.story = {
  description: 'story with two jsx children',
};

export const storyProps = props => <div>{props.text}</div>;
storyProps.story = {
  description: 'story with props',
  controls: { text: { type: 'text', value: 'hello' } },
};

export const storyDesconstructedProps = ({ text }) => <div>{text}</div>;
storyDesconstructedProps.story = {
  description: 'story with deconstructed props',
  controls: { text: { type: 'text', value: 'hello' } },
};

export const externalStory = customStory;

externalStory.story = {
  description: 'story from external file',
};

export const externalStoryProps = customStoryProps;

externalStoryProps.story = {
  description: 'story from external file with props',
  controls: { text: { type: 'text', value: 'hello' } },
};

export const externalStoryDeconstructedProps = customStoryDeconstructedProps;
externalStoryDeconstructedProps.story = {
  description: 'story from external file with deconstructed props',
  controls: { text: { type: 'text', value: 'hello' } },
};
