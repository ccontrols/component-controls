import {
  Store,
  getComponentName,
  JSXTree,
  defaultExport,
} from '@component-controls/core';
import {
  ComponentStatsList,
  StatsFilter,
  ComponentAggregateStats,
  AttributeAggregateRow,
  AttributeAggregateStats,
} from '../types';

export const getComponentUsageStats = (
  store: Store,
  filter?: StatsFilter,
): ComponentStatsList => {
  const stats: ComponentStatsList = Object.keys(store.stories).reduce(
    (acc: ComponentStatsList, storyId: string): ComponentStatsList => {
      const story = store.stories[storyId];
      const { doc: docId = '' } = story;
      const doc = store.docs[docId];
      if (doc && story.component) {
        const componentName = getComponentName(story.component) || '';
        const componentHash = doc.componentsLookup?.[componentName] || '';
        const component = store.components[componentHash];
        if (
          component &&
          (typeof filter !== 'function' || filter({ component, doc }))
        ) {
          if (acc[componentHash] !== undefined) {
            return {
              ...acc,
              [componentHash]: {
                ...acc[componentHash],
                stories: [...acc[componentHash].stories, story],
              },
            };
          } else {
            return {
              ...acc,
              [componentHash]: {
                name: store.components[componentHash].name,
                stories: [story],
                usedBy: {},
                attributes: {},
              },
            };
          }
        }
      }
      return acc;
    },
    {},
  );
  const jsxTreeStats = (
    componentHash: string,
    tree: JSXTree,
    stats: ComponentStatsList,
  ) => {
    if (tree.length) {
      tree.forEach(item => {
        let stat = stats[item.componentKey || ''];
        if (!stat && item.importedName === defaultExport) {
          const docHash = Object.keys(stats).find(
            key => stats[key].name === item.name,
          );
          if (docHash) {
            stat = stats[docHash];
          }
        }
        if (stat) {
          if (stat.usedBy[componentHash] !== undefined) {
            stat.usedBy[componentHash].count =
              stat.usedBy[componentHash].count + 1;
          } else {
            stat.usedBy[componentHash] = {
              count: 1,
              node: item,
            };
          }
          if (item.attributes) {
            item.attributes.forEach(attr => {
              if (stat.attributes[attr] !== undefined) {
                stat.attributes[attr] = stat.attributes[attr] + 1;
              } else {
                stat.attributes[attr] = 1;
              }
            });
          }
        }
        if (item.children) {
          jsxTreeStats(componentHash, item.children, stats);
        }
      });
    }
  };
  Object.keys(stats).forEach(hash => {
    const component = store.components[hash];
    if (component) {
      const { jsx } = component;
      if (jsx) {
        jsxTreeStats(hash, jsx, stats);
      }
    }
  });
  return stats;
};

export const getComponentUsageAggregate = (
  store: Store,
  stats: ComponentStatsList,
): ComponentAggregateStats => {
  return {
    data: Object.keys(stats).map(key => {
      const component = stats[key];
      const storiesCount = component.stories.length;
      const usedByCount = Object.keys(component.usedBy).reduce(
        (acc, item) => acc + component.usedBy[item].count,
        0,
      );
      const attributesCount = Object.keys(component.attributes).reduce(
        (acc, item) => acc + component.attributes[item],
        0,
      );
      return {
        component: store.components[key],
        attributesCount,
        storiesCount,
        usedByCount,
        stats: stats[key],
        componentHash: key,
      };
    }),
    maxStories: Object.keys(stats).reduce(
      (acc, key) => Math.max(acc, stats[key].stories.length),
      0,
    ),
    maxUsed: Object.keys(stats).reduce(
      (acc, key) =>
        Math.max(
          acc,
          Object.keys(stats[key].usedBy).reduce(
            (acc, item) => acc + stats[key].usedBy[item].count,
            0,
          ),
        ),
      0,
    ),
    maxAttributes: Object.keys(stats).reduce(
      (acc, key) =>
        Math.max(
          acc,
          Object.keys(stats[key].attributes).reduce(
            (acc, item) => acc + stats[key].attributes[item],
            0,
          ),
        ),
      0,
    ),
  };
};

export const getAttributeUsageAggregate = (
  store: Store,
  stats: ComponentStatsList,
): AttributeAggregateStats => {
  const data: Record<string, AttributeAggregateRow> = Object.keys(stats).reduce(
    (acc, key) => {
      const component = stats[key];
      const attributes = Object.keys(component.attributes).reduce(
        (acc: Record<string, AttributeAggregateRow>, attribute) => {
          const newItem: AttributeAggregateRow = acc[attribute]
            ? {
                attribute,
                components: {
                  ...acc[attribute].components,
                  [key]: {
                    name: store.components[key].name,
                    count:
                      (acc[attribute].components[key]?.count || 0) +
                      component.attributes[attribute],
                  },
                },
                componentsCount:
                  acc[attribute].componentsCount +
                  (acc[attribute].components[key] ? 0 : 1),
                usedByCount:
                  acc[attribute].usedByCount + component.attributes[attribute],
              }
            : {
                attribute,
                components: {
                  [key]: {
                    count: component.attributes[attribute],
                    name: store.components[key].name,
                  },
                },
                componentsCount: 1,
                usedByCount: component.attributes[attribute],
              };
          return { ...acc, [attribute]: newItem };
        },
        acc,
      );
      return { ...acc, ...attributes };
    },
    {},
  );
  return {
    data: Object.keys(data).reduce(
      (acc: AttributeAggregateRow[], item) => [...acc, data[item]],
      [],
    ),
    maxUsed: Object.keys(data).reduce(
      (acc, key) => Math.max(acc, data[key].usedByCount),
      0,
    ),
    maxComponentsCount: Object.keys(data).reduce(
      (acc, key) =>
        Math.max(
          acc,
          Object.keys(data[key].components).reduce(
            (acc, item) => acc + data[key].components[item].count,
            0,
          ),
        ),
      0,
    ),
  };
};
