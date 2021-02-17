/** @jsx jsx */
import { FC, useContext, useMemo } from 'react';
import { jsx, Themed } from 'theme-ui';
import { Story, Document } from '@component-controls/core';
import { useStore } from '@component-controls/store';
import { ComponentCatalogContext } from '../context';
import { ComponentList } from '../ComponentList';

export type FilterProps = { story: Story; doc: Document };
export type ComponentsCatalogProps = {
  /**
   * filter stories/documents
   */

  filter?: (props: FilterProps) => boolean;

  /**
   * grouping function
   */
  group?: (props: FilterProps) => string;

  /**
   * group/category sorting
   */
  groupSort?: (groups: string[]) => string[];
};

/**
 * Selection of components from stories, to be displayed in a ComponentList
 */
export const ComponentsCatalog: FC<ComponentsCatalogProps> = ({
  filter,
  group,
}) => {
  const store = useStore();
  const context = useContext(ComponentCatalogContext);

  const undefinedKey = 'undefined';
  const { groups, categories } = useMemo(() => {
    const search = context?.state?.search;
    const sort = context?.state?.sort?.toLowerCase();
    const stories: string[] = [];
    const docKeys = Object.keys(store.docs);
    for (let i = 0; i < docKeys.length; i += 1) {
      const docId = docKeys[i];
      const doc = store.docs[docId];
      if (doc.stories?.length) {
        const storyId = doc.stories[0];
        const story = store.stories[storyId];
        if (typeof story.component === 'string') {
          if (!search || story.component.toLowerCase().includes(search)) {
            if (!filter || filter({ story, doc })) {
              stories.push(storyId);
            }
          }
        }
      }
    }

    const groups: Record<string, string[]> = stories.reduce(
      (acc: Record<string, string[]>, id) => {
        const story = store.stories[id] as Story;
        const doc = store.docs[story.doc as string];
        const category: string = group ? group({ story, doc }) : undefinedKey;
        if (acc[category]) {
          return { ...acc, [category]: [...acc[category], id] };
        }
        return { ...acc, [category]: [id] };
      },
      {},
    );
    if (sort) {
      const sortFn = (a: string, b: string): number => {
        const numCompare = (
          n1: number | undefined = 0,
          n2: number | undefined = 0,
          direction: 'asc' | 'desc',
        ) => {
          if (direction === 'desc') {
            return n2 - n1;
          }
          return n1 - n2;
        };
        const strCompare = (
          n1: string | undefined = '',
          n2: string | undefined = '',
          direction: 'asc' | 'desc',
        ) => {
          if (direction === 'desc') {
            return n2.localeCompare(n1);
          }
          return n1.localeCompare(n2);
        };

        const storyA = store.stories[a] as Story;
        const storyB = store.stories[b] as Story;
        if (
          typeof storyA.component !== 'string' ||
          typeof storyB.component !== 'string'
        ) {
          return 0;
        }
        const docA = store.docs[storyA.doc as string];
        const docB = store.docs[storyB.doc as string];
        if (!docA.componentsLookup || !docB.componentsLookup) {
          return 0;
        }
        const componentA =
          store.components[docA.componentsLookup[storyA.component]];
        const componentB =
          store.components[docB.componentsLookup[storyB.component]];

        switch (sort) {
          case 'name':
            return strCompare(storyA.component, storyB.component, 'asc');
          case 'size_desc':
            return numCompare(
              componentA.fileInfo?.sloc?.source,
              componentB.fileInfo?.sloc?.source,
              'desc',
            );
          case 'size_asc':
            return numCompare(
              componentA.fileInfo?.sloc?.source,
              componentB.fileInfo?.sloc?.source,
              'asc',
            );
          case 'commits_desc':
            return numCompare(
              componentA.fileInfo?.commits?.length,
              componentB.fileInfo?.commits?.length,
              'desc',
            );
          case 'commits_asc':
            return numCompare(
              componentA.fileInfo?.commits?.length,
              componentB.fileInfo?.commits?.length,
              'asc',
            );
          case 'comments_desc':
            return numCompare(
              (componentA.fileInfo?.sloc?.comment || 0) /
                (componentA.fileInfo?.sloc?.source || 1),
              (componentB.fileInfo?.sloc?.comment || 0) /
                (componentB.fileInfo?.sloc?.source || 1),
              'desc',
            );
          case 'comments_asc':
            return numCompare(
              (componentA.fileInfo?.sloc?.comment || 0) /
                (componentA.fileInfo?.sloc?.source || 1),
              (componentB.fileInfo?.sloc?.comment || 0) /
                (componentB.fileInfo?.sloc?.source || 1),
              'asc',
            );

          case 'date_created_asc':
            return numCompare(
              (new Date(
                componentA.fileInfo?.dateCreated || '',
              ) as unknown) as number,
              (new Date(
                componentB.fileInfo?.dateCreated || '',
              ) as unknown) as number,
              'asc',
            );
          case 'date_created_desc':
            return numCompare(
              (new Date(
                componentA.fileInfo?.dateCreated || '',
              ) as unknown) as number,
              (new Date(
                componentB.fileInfo?.dateCreated || '',
              ) as unknown) as number,
              'desc',
            );
          case 'date_modified_asc':
            return numCompare(
              (new Date(
                componentA.fileInfo?.dateModified || '',
              ) as unknown) as number,
              (new Date(
                componentB.fileInfo?.dateModified || '',
              ) as unknown) as number,
              'asc',
            );
          case 'date_modified_desc':
            return numCompare(
              (new Date(
                componentA.fileInfo?.dateModified || '',
              ) as unknown) as number,
              (new Date(
                componentB.fileInfo?.dateModified || '',
              ) as unknown) as number,
              'desc',
            );
        }
        return 0;
      };
      Object.keys(groups).forEach(
        group => (groups[group] = groups[group].sort(sortFn)),
      );
    }
    const sorted = Object.keys(groups).sort((a, b) => {
      if (a === undefinedKey) {
        if (b === undefinedKey) {
          return 0;
        } else {
          return -1;
        }
      }
      if (b === undefinedKey) {
        return 1;
      }
      return a.localeCompare(b);
    });
    return {
      categories: sorted,
      groups,
    };
  }, [context?.state?.search, context?.state?.sort, filter, group, store]);
  return (
    <div>
      {categories.map(category => (
        <div key={`catalog_categories_${category}`} sx={{ py: 2 }}>
          {category !== undefinedKey && <Themed.h2>{category}</Themed.h2>}
          <ComponentList stories={groups[category]} sx={{ py: 2 }} />
        </div>
      ))}
    </div>
  );
};
