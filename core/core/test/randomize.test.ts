const faker = require('faker/locale/en_US');
import { ControlTypes, ComponentControl } from '../src';
import { randomizeData } from '@component-controls/core/src/randomizeData';

describe('Options utility functions', () => {
  const name: ComponentControl = {
    type: ControlTypes.TEXT,
    value: 'Tom',
    defaultValue: 'Tom',
  };
  const lastName: ComponentControl = {
    type: ControlTypes.TEXT,
    value: 'Mark',
    defaultValue: 'Mark',
  };
  const age: ComponentControl = {
    type: ControlTypes.NUMBER,
    value: 19,
    defaultValue: 19,
  };
  const male: ComponentControl = {
    type: ControlTypes.BOOLEAN,
    value: true,
    defaultValue: true,
  };
  const object: ComponentControl = {
    type: ControlTypes.OBJECT,
    value: {
      name,
      lastName,
      age,
      male,
    },
    defaultValue: {
      name,
      lastName,
      age,
      male,
    },
  };
  const controls: ComponentControl = {
    name,
    lastName,
    age,
    male,
    object,
  };
  faker.seed(123);
  it('Randomimze collection', () => {
    expect(randomizeData(controls)).toMatchSnapshot();
  });
});
