import { atom, selector } from 'recoil';
import { Result } from 'axe-core';

export type Selection = string[];

export const axeResults = atom({
  key: 'axeResults',
  default: {
    violations: [],
    passes: [],
    incomplete: [],
  },
});

export const axeViolations = selector({
  key: 'axeViolations',
  get: ({ get }: any) => {
    const { violations } = get(axeResults);
    console.log(violations);
    return violations;
  },
});

export const axePasses = selector({
  key: 'axePasses',
  get: ({ get }: any) => {
    const { passes } = get(axeResults);
    return passes;
  },
});

export const axeIncomplete = selector({
  key: 'axeIncomplete',
  get: ({ get }: any) => {
    const { incomplete } = get(axeResults);
    return incomplete;
  },
});

export const taggedList = selector({
  key: 'taggedList',
  get: ({ get }: any) => {
    const violations = get(axeViolations);
    return violations.reduce(
      (acc: { [tag: string]: string[] }, result: Result) => {
        result.tags.forEach(tag => {
          if (acc[tag] === undefined) {
            acc[tag] = [];
          }
          result.nodes.forEach(node => {
            node.target.forEach(target => {
              if (!acc[tag].includes(target)) {
                acc[tag].push(target);
              }
            });
          });
        });
        return acc;
      },
      {},
    );
  },
});

export const selectionList = atom({
  key: 'selectionList',
  default: [],
});

export const isSelected = (selectionList: Selection) =>
  selector({
    key: `isSelected_${selectionList.join('_')}`,
    get: ({ get }: any) => {
      const selection = get(selectionList);
      return selectionList.some((s: string) => selection.includes(s));
    },
  });

export const isTagSelected = (tag: string) =>
  selector({
    key: `isTagSelected_${tag}`,
    get: ({ get }: any) => {
      const tagged = get(taggedList);
      return tagged[tag] ? isSelected(tagged[tag]) : false;
    },
  });
