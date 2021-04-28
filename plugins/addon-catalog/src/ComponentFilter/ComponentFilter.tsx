/** @jsx jsx */
import { FC, useContext } from 'react';
import { jsx, Box, BoxProps, Select } from 'theme-ui';
import { SearchInput } from '@component-controls/components';
import { ComponentCatalogContext, ComponentCatalogOrder } from '../context';

const sortOptions: Record<ComponentCatalogOrder, string> = {
  name: 'Component name',
  date_created_asc: 'Oldest created',
  date_created_desc: 'Newest created',
  date_modified_asc: 'Oldest updated',
  date_modified_desc: 'Newest updated',
  size_asc: 'Smallest size',
  size_desc: 'Largest size',
  commits_desc: 'Most commits',
  commits_asc: 'Least commits',
  comments_desc: 'Most commented',
  comments_asc: 'Least commented',
};
export const ComponentFilter: FC<BoxProps> = props => {
  const context = useContext(ComponentCatalogContext);
  if (!context) {
    console.error('ComponentFilter needs a ComponentCatalogContextProvider');
  }
  const { state, setState } = context;
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      {...props}
    >
      <SearchInput
        placeholder="search..."
        sx={{ width: '200px' }}
        value={state?.search}
        onSearch={value => setState({ ...state, search: value })}
      />
      <div sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <div sx={{ mr: 1 }}>sort by:</div>
        <Select
          aria-label="select sorting order"
          sx={{ width: '200px', py: '3px' }}
          onChange={e =>
            setState({
              ...state,
              sort: e.target.value as ComponentCatalogOrder,
            })
          }
          value={state?.sort}
        >
          {Object.keys(sortOptions).map(key => (
            <option value={key} key={key}>
              {sortOptions[key as ComponentCatalogOrder]}
            </option>
          ))}
        </Select>
      </div>
    </Box>
  );
};
