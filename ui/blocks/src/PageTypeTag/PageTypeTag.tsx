import React, { FC, useState, useEffect } from 'react';
import { DocType } from '@component-controls/core';
import {
  Tag,
  Link,
  getAccentPaletteColor,
} from '@component-controls/components';
import { useDocPropCount, useConfig } from '@component-controls/store';

export interface PageTypeTagProps {
  type: DocType;
}
export const PageTypeTag: FC<PageTypeTagProps> = ({ type }) => {
  const config = useConfig();
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
    <Link href={`/${config.pages?.[type].basePath}`}>
      <Tag color={colors[type] || '#f49342'}>{type}</Tag>
    </Link>
  );
};
