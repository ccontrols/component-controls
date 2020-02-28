import React from 'react';
import { ControlTypes } from '@component-controls/specification';
import {
  LoadedComponentControls,
  mergeControlValues,
  getControlValues,
  loadControls,
} from '@component-controls/core';

import { ControlsTable } from './ControlsTable';

export default {
  title: 'Blocks/Components/ControlsTable',
  component: ControlsTable,
};

export const simple = () => {
  const [controls, setControls] = React.useState<LoadedComponentControls>({
    name: {
      type: ControlTypes.TEXT,
      label: 'Name',
      value: 'Mark',
      defaultValue: 'Mark',
    },
    age: {
      type: ControlTypes.NUMBER,
      label: 'Age',
      value: 19,
      defaultValue: 19,
    },
    clickMe: {
      type: ControlTypes.BUTTON,
      label: '+1',
      onClick: () => {},
    },
  });

  return (
    <>
      <h2>{`Hello, my name is ${controls.name.value}, and I am ${controls.age.value} years old.`}</h2>
      <ControlsTable
        controls={controls as LoadedComponentControls}
        title="Example controls"
        storyId="1-11"
        setControlValue={(storyId, name, value) =>
          setControls(mergeControlValues(controls, name, value))
        }
        clickControl={() =>
          setControls(
            mergeControlValues(
              controls,
              'age',
              typeof controls.age.value === 'string'
                ? parseInt(controls.age.value, 10) + 1
                : 19,
            ),
          )
        }
      />
    </>
  );
};

const arrayOfObjects = [
  {
    label: 'Sparky',
    dogParent: 'Matthew',
    location: 'Austin',
  },
  {
    label: 'Juniper',
    dogParent: 'Joshua',
    location: 'Austin',
  },
];
const GROUP_IDS = {
  DISPLAY: 'Display',
  GENERAL: 'General',
  FAVORITES: 'Favorites',
};

const advancedControls: LoadedComponentControls = loadControls({
  userName: {
    type: ControlTypes.TEXT,
    label: 'Name',
    value: 'Storyteller',
    groupId: GROUP_IDS.GENERAL,
  },
  age: {
    type: ControlTypes.NUMBER,
    label: 'Age',
    value: 78,
    range: true,
    min: 0,
    max: 90,
    step: 5,
    groupId: GROUP_IDS.GENERAL,
  },
  birthday: {
    type: ControlTypes.DATE,
    label: 'Birthday',
    value: new Date(),
    groupId: GROUP_IDS.GENERAL,
  },
  dollars: {
    type: ControlTypes.NUMBER,
    label: 'Dollars',
    value: 12.5,
    min: 0,
    max: 100,
    step: 0.01,
    groupId: GROUP_IDS.GENERAL,
  },
  years: {
    type: ControlTypes.NUMBER,
    label: 'Years in NY',
    value: 9,
    groupId: GROUP_IDS.GENERAL,
  },
  nice: {
    type: ControlTypes.BOOLEAN,
    label: 'Nice',
    value: true,
    groupId: GROUP_IDS.FAVORITES,
  },
  items: {
    type: ControlTypes.ARRAY,
    label: 'Items',
    value: ['Laptop', 'Book', 'Whiskey'],
    groupId: GROUP_IDS.FAVORITES,
  },

  fruit: {
    type: ControlTypes.OPTIONS,
    label: 'Fruit',
    value: 'apple',
    options: {
      Apple: 'apple',
      Banana: 'banana',
      Cherry: 'cherry',
    },
    groupId: GROUP_IDS.FAVORITES,
  },
  otherFruit: {
    type: ControlTypes.OPTIONS,
    label: 'Other Fruit',
    value: 'watermelon',
    options: {
      Kiwi: 'kiwi',
      Guava: 'guava',
      Watermelon: 'watermelon',
    },
    display: 'radio',
    groupId: GROUP_IDS.FAVORITES,
  },
  dog: {
    type: ControlTypes.OPTIONS,
    options: arrayOfObjects,
    value: arrayOfObjects[0],
    groupId: GROUP_IDS.FAVORITES,
  },
  backgroundColor: {
    type: ControlTypes.COLOR,
    value: '#dedede',
    groupId: GROUP_IDS.DISPLAY,
  },

  color: {
    type: ControlTypes.COLOR,
    value: '#000000',
    groupId: GROUP_IDS.DISPLAY,
  },
  otherStyles: {
    type: ControlTypes.OBJECT,
    label: 'Styles',
    value: {
      // do not randomize the border style
      border: {
        type: ControlTypes.TEXT,
        value: '2px dashed silver',
        data: null,
      },
      borderRadius: { type: ControlTypes.NUMBER, value: 10 },
      padding: { type: ControlTypes.NUMBER, value: 10 },
    },
    groupId: GROUP_IDS.DISPLAY,
  },
  images: {
    type: ControlTypes.FILES,
    label: 'Happy Picture',
    accept: 'image/*',
    value: [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',
    ],
    groupId: GROUP_IDS.DISPLAY,
  },
});

export const advanced = () => {
  const [controls, setControls] = React.useState<LoadedComponentControls>(
    advancedControls,
  );
  const {
    userName,
    age,
    fruit,
    otherFruit,
    dollars,
    years,
    backgroundColor,
    color,
    items,
    otherStyles,
    nice,
    images,
    dog,
    birthday,
  } = getControlValues(controls);
  const intro = `My name is ${userName}, I'm ${age} years old, and my favorite fruit is ${fruit}. I also enjoy ${otherFruit}, and hanging out with my dog ${dog}`;
  const style = {
    backgroundColor,
    color,
    ...otherStyles,
  };
  const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';
  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };

  return (
    <>
      <div style={style}>
        <p>{intro}</p>
        <p>
          My birthday is:{' '}
          {new Date(birthday).toLocaleDateString('en-US', dateOptions)} at:
          {new Date(birthday).toLocaleTimeString()}
        </p>
        <p>I live in NY for {years} years.</p>
        <p>My wallet contains: ${dollars.toFixed(2)}</p>
        <p>In my backpack, I have:</p>
        <ul>
          {items && items.map((item: string) => <li key={item}>{item}</li>)}
        </ul>
        <p>{salutation}</p>
        <p>
          When I am happy I look like this: <img src={images[0]} alt="happy" />
        </p>
      </div>
      <ControlsTable
        controls={controls as LoadedComponentControls}
        title="Complex controls"
        storyId="1-12"
        setControlValue={(storyId, name, value) =>
          setControls(mergeControlValues(controls, name, value))
        }
      />
    </>
  );
};
