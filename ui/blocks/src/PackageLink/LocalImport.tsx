/* eslint-disable react/display-name */
/** @jsx jsx */
import { FC, useMemo } from 'react';
import { jsx } from 'theme-ui';
import { defaultExport, getStoryPath, JSXNode } from '@component-controls/core';
import { Tag, Link } from '@component-controls/components';
import { useStore } from '@component-controls/store';

export interface LocalImportProps {
  node: JSXNode;
}

export const LocalImport: FC<LocalImportProps> = ({ node }) => {
  const store = useStore();
  const { componentKey, importedName, name } = node;
  const storypath = useMemo(() => {
    const docId = componentKey
      ? Object.keys(store.docs).find(id => {
          const doc = store.docs[id];
          return doc?.componentsLookup
            ? Object.values(doc?.componentsLookup).includes(componentKey)
            : false;
        })
      : undefined;
    if (docId) {
      const doc = store.docs[docId];
      let storyId = undefined;
      if (doc?.stories?.length) {
        storyId = doc?.stories[0];
      }
      return (storyId || doc) && getStoryPath(storyId, doc, store);
    }
    return undefined;
  }, [store, componentKey]);
  const displayName = importedName === defaultExport ? name : importedName;
  return displayName ? (
    <Tag
      variant="tag.rightmargin"
      key={`${name}`}
      borderSize={1}
      color={storypath ? 'green' : 'lightgrey'}
      sx={{
        fontSize: 1,
        lineHeight: '1.2rem',
      }}
    >
      {storypath ? <Link href={storypath}>{displayName}</Link> : displayName}
    </Tag>
  ) : null;
};
