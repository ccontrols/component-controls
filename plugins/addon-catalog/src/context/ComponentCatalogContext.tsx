import React, { FC, createContext, useState } from 'react';

export type ComponentCatalogOrder =
  | 'name'
  | 'size_asc'
  | 'size_desc'
  | 'date_created_asc'
  | 'date_created_desc'
  | 'date_modified_asc'
  | 'date_modified_desc'
  | 'commits_desc'
  | 'commits_asc'
  | 'comments_desc'
  | 'comments_asc';

export interface ComponentCatalogContextState {
  sort?: ComponentCatalogOrder;
  search?: string;
}

interface ComponentCatalogContextProps {
  state: ComponentCatalogContextState;
  setState: (newState: ComponentCatalogContextState) => void;
}

const defaultState: ComponentCatalogContextState = { sort: 'name', search: '' };

export const ComponentCatalogContext = createContext<
  ComponentCatalogContextProps
>({
  state: defaultState,
  setState: () => {
    //noop
  },
});

export const ComponentCatalogContextProvider: FC<ComponentCatalogContextState> = ({
  children,
}) => {
  const [state, setState] = useState<ComponentCatalogContextState>(
    defaultState,
  );
  return (
    <ComponentCatalogContext.Provider value={{ state, setState }}>
      {children}
    </ComponentCatalogContext.Provider>
  );
};
