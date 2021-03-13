import React, { FC, useState, useEffect } from 'react';
import { DocType, getDocTypePath } from '@component-controls/core';
import {
  Tag,
  Link,
  getAccentPaletteColor,
} from '@component-controls/components';
import { useDocPropCount, useStore } from '@component-controls/store';

export interface PageTypeTagProps {
  /**
   * page type
   */
  type: DocType;
  /**
   * raw string - useful for highlighting in search results
   */
  raw?: string;
}
export const PageTypeTag: FC<PageTypeTagProps> = ({ type, raw }) => {
  const store = useStore();
  const { config } = store;
  const tags = useDocPropCount('type');
  const [colors, setColors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    setColors(
      Object.keys(tags).reduce(
        (acc, key, index) => ({
          ...acc,
          [key]: getAccentPaletteColor(index),
        }),
        {},
      ),
    );
  }, [tags]);
  return (
    <Link href={getDocTypePath(store, config.pages?.[type].basePath)}>
      <Tag color={colors[type] || '#f49342'} raw={raw}>
        {type}
      </Tag>
    </Link>
  );
};
