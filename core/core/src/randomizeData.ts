import {
  ControlTypes,
  ComponentControlNumber,
  ComponentControlOptions,
} from '@component-controls/specification';
const faker = require('faker/locale/en_US');

import { LoadedComponentControls } from './utils';

const arrayElements = (arr: any[], c?: number) => {
  const array = arr || ['a', 'b', 'c'];
  let count = 0;
  if (typeof c !== 'number') {
    count = faker.random.number({ min: 1, max: array.length });
  } else if (c > array.length) {
    count = array.length;
  } else if (c < 0) {
    count = 0;
  }

  const arrayCopy = array.slice();
  const countToRemove = arrayCopy.length - count;
  for (let i = 0; i < countToRemove; i += 1) {
    const indexToRemove = faker.random.number({ max: arrayCopy.length - 1 });
    arrayCopy.splice(indexToRemove, 1);
  }

  return arrayCopy;
};

interface RandomizedData {
  [key: string]: any;
}

export const randomizeData = (
  controls: LoadedComponentControls,
): RandomizedData => {
  return Object.keys(controls)
    .map(name => {
      const control = controls[name];
      const { data } = control;
      if (data === false || data === null) {
        return null;
      }
      // check if control has custom settings for generating data
      if (data && data.name) {
        const fakerType = data.name.split('.');
        const fakerRecurse = (f: any, sig: string): any => (f ? f[sig] : f);
        const fakrFn = fakerType.reduce(
          (acc: any, f: string) => fakerRecurse(acc, f),
          faker,
        );
        if (typeof fakrFn === 'function') {
          return {
            name,
            value: fakrFn(data.options),
          };
        }
      }
      const { type } = control;
      switch (type) {
        case ControlTypes.TEXT: {
          if (name.startsWith('src')) {
            return {
              name,
              value: faker.internet.avatar(),
            };
          }
          return {
            name,
            value: faker.name.findName(),
          };
        }
        case ControlTypes.COLOR:
          return {
            name,
            value: faker.internet.color(),
          };
        case ControlTypes.BOOLEAN:
          return {
            name,
            value: faker.random.boolean(),
          };
        case ControlTypes.NUMBER:
          const step: number = control
            ? (control as ComponentControlNumber).step || 1
            : 1;

          const randomNumber: number = Math.max(
            Math.min(
              faker.random.number({
                min:
                  (control as ComponentControlNumber).min ||
                  (control.value as number) / 2,
                max:
                  (control as ComponentControlNumber).max ||
                  (control.value as number) * 2,
              }),
              (control as ComponentControlNumber).max || Infinity,
            ),
            (control as ComponentControlNumber).min || -Infinity,
          );
          return {
            name,
            value: Math.ceil(randomNumber / step) * step,
          };
        case ControlTypes.OBJECT: {
          if (typeof control.value === 'object') {
            return {
              name,
              value: {
                ...randomizeData(control.value as LoadedComponentControls),
              },
            };
          }
          return null;
        }
        case ControlTypes.OPTIONS: {
          const optionsControl = control as ComponentControlOptions;
          let value;
          if (Array.isArray(optionsControl.options)) {
            if (
              optionsControl.display === 'multi-select' ||
              optionsControl.display === 'check' ||
              optionsControl.display === 'inline-check'
            ) {
              value = arrayElements(optionsControl.options);
            } else {
              value = faker.random.arrayElement(optionsControl.options);
            }
          } else if (typeof optionsControl.options === 'object') {
            if (
              optionsControl.display === 'multi-select' ||
              optionsControl.display === 'check' ||
              optionsControl.display === 'inline-check'
            ) {
              value = arrayElements(Object.values(optionsControl.options));
            } else {
              value = faker.random.objectElement(optionsControl.options);
            }
          } else {
            return null;
          }
          return {
            name,
            value,
          };
        }
        default:
          return null;
      }
    })
    .reduce((acc, f) => (f ? { ...acc, [f.name]: f.value } : acc), {});
};
