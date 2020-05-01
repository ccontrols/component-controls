const faker = require('faker/locale/en_US');
import { LoadedComponentControls, LoadedComponentControl } from './utils';
import { ControlTypes } from '@component-controls/specification';
import { randomizeData } from '@component-controls/core/src/randomizeData';

describe('Options utility functions', () => {
  const name: LoadedComponentControl = {
    type: ControlTypes.TEXT,
    value: 'Tom',
    defaultValue: 'Tom',
  };
  const lastName: LoadedComponentControl = {
    type: ControlTypes.TEXT,
    value: 'Mark',
    defaultValue: 'Mark',
  };
  const age: LoadedComponentControl = {
    type: ControlTypes.NUMBER,
    value: 19,
    defaultValue: 19,
  };
  const male: LoadedComponentControl = {
    type: ControlTypes.BOOLEAN,
    value: true,
    defaultValue: true,
  };
  const object: LoadedComponentControl = {
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
  const controls: LoadedComponentControls = {
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
