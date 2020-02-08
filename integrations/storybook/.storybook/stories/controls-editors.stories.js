import React from 'react';
import PropTypes from 'prop-types';
import { Title, Subtitle, Description, Story, Props, Stories } from '@storybook/addon-docs/blocks';
import { ControlsEditorsTable } from '@component-controls/storybook/blocks';

export default {
  title: 'Addons/Controls/controls',
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle />
          <Description />
          <Story id="." />
          <ControlsEditorsTable id="." />
          <Props />
          <Stories />
        </>
      ),
    },
  },
};

export const textDefaultProp = ({ text }) => text;
textDefaultProp.story = {
  controls: {
    text: { type: 'text', value: 'Hello' },
  },
};

export const selectProp = ({ value }) => <div>{JSON.stringify({ value }, null, 2)}</div>;

selectProp.propTypes = {
  value: PropTypes.string,
};

selectProp.defaultProps = {
  value: undefined,
};

selectProp.story = {
  controls: {
    value: {
      type: 'options',
      label: 'Select',
      value: 1,
      options: [1, 2, 3, undefined, null],
      display: 'select',
    },
  },
};

export const tweaksStaticValues = ({
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
}) => {
  const intro = `My name is ${userName}, I'm ${age} years old, and my favorite fruit is ${fruit}. I also enjoy ${otherFruit}, and hanging out with my dog ${dog.label}`;
  const style = { backgroundColor, color, ...otherStyles };
  const salutation = nice ? 'Nice to meet you!' : 'Leave me alone!';
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' };

  return (
    <div style={style}>
      <p>{intro}</p>
      <p>
        My birthday is: {new Date(birthday).toLocaleDateString('en-US', dateOptions)} at:
        {new Date(birthday).toLocaleTimeString()}
      </p>
      <p>I live in NY for {years} years.</p>
      <p>My wallet contains: ${dollars.toFixed(2)}</p>
      <p>In my backpack, I have:</p>
      <ul>{items && items.map(item => <li key={item}>{item}</li>)}</ul>
      <p>{salutation}</p>
      <p>
        When I am happy I look like this: <img src={images[0]} alt="happy" />
      </p>
    </div>
  );
};

tweaksStaticValues.propTypes = {
  userName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  fruit: PropTypes.string.isRequired,
  otherFruit: PropTypes.string.isRequired,
  dollars: PropTypes.number.isRequired,
  years: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  otherStyles: PropTypes.arrayOf(PropTypes.string).isRequired,
  nice: PropTypes.bool.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  dog: PropTypes.shape({
    label: PropTypes.string,
    dogParent: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
  birthday: PropTypes.string.isRequired,
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

tweaksStaticValues.story = {
  controls: {
    userName: {
      type: 'text',
      label: 'Name',
      value: 'Storyteller',
      groupId: GROUP_IDS.GENERAL,
    },
    age: {
      type: 'number',
      label: 'Age',
      value: 78,
      range: true,
      min: 0,
      max: 90,
      step: 5,
      groupId: GROUP_IDS.GENERAL,
    },
    birthday: {
      type: 'date',
      label: 'Birthday',
      value: new Date(),
      groupId: GROUP_IDS.GENERAL,
    },
    dollars: {
      type: 'number',
      label: 'Dollars',
      value: 12.5,
      min: 0,
      max: 100,
      step: 0.01,
      groupId: GROUP_IDS.GENERAL,
    },
    years: { type: 'number', label: 'Years in NY', value: 9, groupId: GROUP_IDS.GENERAL },
    nice: { type: 'boolean', label: 'Nice', value: true, groupId: GROUP_IDS.FAVORITES },
    items: {
      type: 'array',
      label: 'Items',
      value: ['Laptop', 'Book', 'Whiskey'],
      groupId: GROUP_IDS.FAVORITES,
    },

    fruit: {
      type: 'options',
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
      type: 'options',
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
      type: 'options',
      options: arrayOfObjects,
      value: arrayOfObjects[0],
      groupId: GROUP_IDS.FAVORITES,
    },
    backgroundColor: {
      type: 'color',
      value: '#dedede',
      groupId: GROUP_IDS.DISPLAY,
    },

    color: {
      type: 'color',
      value: '#000000',
      groupId: GROUP_IDS.DISPLAY,
    },

    otherStyles: {
      type: 'object',
      label: 'Styles',
      value: {
        // do not randomize the border style
        border: { type: 'text', value: '2px dashed silver', data: null },
        borderRadius: { type: 'number', value: 10 },
        padding: { type: 'number', value: 10 },
      },
      groupId: GROUP_IDS.DISPLAY,
    },
    images: {
      type: 'files',
      label: 'Happy Picture',
      accept: 'image/*',
      value: [
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiARwMCyEWcOFPAAAAP0lEQVQoz8WQMQoAIAwDL/7/z3GwghSp4KDZyiUpBMCYUgd8rehtH16/l3XewgU2KAzapjXBbNFaPS6lDMlKB6OiDv3iAH1OAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTAxLTI4VDEyOjExOjMzLTA3OjAwlAHQBgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wMS0yOFQxMjoxMTozMy0wNzowMOVcaLoAAAAASUVORK5CYII=',
      ],
      groupId: GROUP_IDS.DISPLAY,
    },

    hidden: { type: 'text', hidden: true },
  },
};

export const dynamicProps = ({ showOptional }) => {
  return (
    <>
      <div>I must be here</div>
      {showOptional === 'yes' ? <div>Optional, I can disappear</div> : null}
    </>
  );
};

dynamicProps.propTypes = {
  showOptional: PropTypes.string.isRequired,
};

dynamicProps.story = {
  controls: {
    showOptional: {
      type: 'options',
      label: 'Show optional',
      value: 'yes',
      options: ['yes', 'no'],
      display: 'select',
    },
  },
};

export const complexSelect = ({ m }) => {
  const value = m.toString();
  const type = Array.isArray(m) ? 'array' : typeof m;
  return (
    <pre>
      the type of {JSON.stringify(value, null, 2)} = {type}
    </pre>
  );
};

complexSelect.propTypes = {
  m: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.arrayOf(PropTypes.number)])
    .isRequired,
};

complexSelect.story = {
  controls: {
    m: {
      type: 'options',
      label: 'complex',
      options: {
        number: 1,
        string: 'string',
        object: {},
        array: [1, 2, 3],
        function: () => {},
      },
      value: 'string',
    },
  },
};

export const optionsProperties = ({
  optionRadio,
  optionInlineRadio,
  optionSelect,
  optionsMultiSelect,
  optionsCheck,
  optionsInlineCheck,
}) => {
  return (
    <div>
      <p>Weekday: {optionRadio}</p>
      <p>Weekend: {optionInlineRadio}</p>
      <p>Month: {optionSelect}</p>
      <p>Fruit:</p>
      <ul>
        {optionsMultiSelect.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Vegetables:</p>
      <ul>
        {optionsCheck.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>Dairy:</p>
      <ul>
        {optionsInlineCheck.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

optionsProperties.propTypes = {
  optionRadio: PropTypes.string.isRequired,
  optionInlineRadio: PropTypes.string.isRequired,
  optionSelect: PropTypes.string.isRequired,
  optionsMultiSelect: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsCheck: PropTypes.arrayOf(PropTypes.string).isRequired,
  optionsInlineCheck: PropTypes.arrayOf(PropTypes.string).isRequired,
};

optionsProperties.story = {
  controls: {
    optionRadio: {
      type: 'options',
      label: 'Radio',
      options: {
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
      },
      value: 'Tuesday',
      display: 'radio',
    },
    optionInlineRadio: {
      type: 'options',
      label: 'Inline Radio',
      options: {
        Saturday: 'Saturday',
        Sunday: 'Sunday',
      },
      value: 'Saturday',
      display: 'inline-radio',
    },
    optionSelect: {
      type: 'options',
      label: 'Select',
      options: {
        January: 'January',
        February: 'February',
        March: 'March',
      },
      value: 'January',
      display: 'select',
    },
    optionsMultiSelect: {
      type: 'options',
      label: 'Multi Select',
      options: {
        Apple: 'apple',
        Banana: 'banana',
        Cherry: 'cherry',
      },
      value: ['apple'],
      display: 'multi-select',
    },
    optionsCheck: {
      type: 'options',
      label: 'Check',
      options: {
        Corn: 'corn',
        Carrot: 'carrot',
        Cucumber: 'cucumber',
      },
      value: ['carrot'],
      display: 'check',
    },
    optionsInlineCheck: {
      type: 'options',
      label: 'Inline Check',
      options: {
        Milk: 'milk',
        Cheese: 'cheese',
        Butter: 'butter',
      },
      value: ['milk'],
      display: 'inline-check',
    },
  },
};

let injectedItems = [];
let injectedIsLoading = false;

const ItemLoader = ({ isLoading, items }) => {
  if (isLoading) {
    return <p>Loading data</p>;
  }
  if (!items.length) {
    return <p>No items loaded</p>;
  }
  return (
    <ul>
      {items.map(i => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
};

ItemLoader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export const triggersActionsViaButton = () => {
  // Needed to enforce @babel/transform-react-constant-elements deoptimization
  // See https://github.com/babel/babel/issues/10522
  const loaderProps = {
    isLoading: injectedIsLoading,
    items: injectedItems,
  };
  return (
    <>
      <p>Hit the knob button and it will toggle the items list into multiple states.</p>
      <ItemLoader {...loaderProps} />
    </>
  );
};

triggersActionsViaButton.story = {
  controls: {
    button: {
      type: 'button',
      onClick: () => {
        if (!injectedIsLoading && injectedItems.length === 0) {
          injectedIsLoading = true;
        } else if (injectedIsLoading && injectedItems.length === 0) {
          injectedIsLoading = false;
          injectedItems = ['pencil', 'pen', 'eraser'];
        } else if (injectedItems.length > 0) {
          injectedItems = [];
        }
      },
    },
  },
};

export const radioEnum = ({ radio }) => radio;

radioEnum.story = {
  controls: {
    radio: {
      type: 'options',
      label: 'Radio',
      value: 'Monday',
      display: 'radio',
      options: {
        Monday: 'Monday',
        Tuesday: 'Tuesday',
        Wednesday: 'Wednesday',
      },
    },
  },
};

export const reservedKeyword = ({ name }) => name;

reservedKeyword.story = {
  controls: {
    name: { type: 'text', label: 'Text', value: 'Hello' },
  },
};

export const XssSafety = ({ content }) => (
  <div
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: content,
    }}
  />
);

XssSafety.propTypes = {
  content: PropTypes.string.isRequired,
};

XssSafety.story = {
  name: 'XSS safety',
  controls: {
    content: {
      type: 'text',
      label: 'Rendered string',
      value: '<img src="x" onerror="alert(\'XSS Attack\')" >',
      escapeValue: true,
    },
  },
};

export const generateRandomData = ({ street }) => street;

generateRandomData.story = {
  controls: {
    street: {
      type: 'text',
      label: 'Street',
      value: '30333 Atlantic Ave.',
      // reference: https://github.com/marak/Faker.js/
      data: { name: 'address.streetAddress' },
    },
  },
};

export const randomNumber = ({ number }) => number;

randomNumber.story = {
  controls: {
    number: {
      type: 'number',
      label: 'A number',
      value: 10,
      // reference: https://github.com/marak/Faker.js/
      data: { name: 'random.number', options: { min: 50, max: 100 } },
    },
  },
};

export const groupedControls = ({ age, name, message }) => {
  const content = `
    I am ${name} and I'm ${age} years old.
    ${message}
  `;

  return <div>{content}</div>;
};

const personalGroupId = 'personal info';
const generalGroupId = 'general info';

groupedControls.story = {
  controls: {
    name: { type: 'text', label: 'Name', value: 'James', groupId: personalGroupId },
    age: { type: 'number', label: 'Age', value: 35, groupId: personalGroupId },
    message: { type: 'text', label: 'Mesage', value: 'Hello!', groupId: generalGroupId },
  },
};

groupedControls.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
