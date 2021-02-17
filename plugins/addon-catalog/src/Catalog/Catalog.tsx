import React, { FC } from 'react';
import { Box, BoxProps } from 'theme-ui';
import { ComponentCatalogContextProvider } from '../context';
import { ComponentFilter } from '../ComponentFilter';
import {
  ComponentsCatalog,
  ComponentsCatalogProps,
} from '../ComponentsCatalog';

export const Catalog: FC<ComponentsCatalogProps & BoxProps> = ({
  filter,
  group,
  groupSort,
  ...rest
}) => (
  <Box {...rest}>
    <ComponentCatalogContextProvider>
      <ComponentFilter />
      <ComponentsCatalog filter={filter} group={group} groupSort={groupSort} />
    </ComponentCatalogContextProvider>
  </Box>
);
