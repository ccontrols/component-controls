import React, { FC, useState, useEffect, useContext } from 'react';
import { DocType } from '@component-controls/core';
import {
  Tag,
  Link,
  getAccentPaletteColor,
} from '@component-controls/components';
import { BlockContext } from '../context';

export interface PageTypeTagProps {
  type: DocType;
}
export const PageTypeTag: FC<PageTypeTagProps> = ({ type }) => {
  const { storeProvider } = useContext(BlockContext);
  const { config } = storeProvider;
  const [colors, setColors] = useState<{ [key: string]: string }>({});
  useEffect(() => {
    const uniqueTypes = storeProvider.getUniquesByCategory('type');
    setColors(
      Object.keys(uniqueTypes).reduce(
        (acc, key, index) => ({
          ...acc,
          [key]: getAccentPaletteColor(index),
        }),
        {},
      ),
    );
  }, [storeProvider]);
  return (
    <Link href={`/${config?.pages?.[type].basePath}`}>
      <Tag color={colors[type] || '#f49342'}>{type}</Tag>
    </Link>
  );
};
