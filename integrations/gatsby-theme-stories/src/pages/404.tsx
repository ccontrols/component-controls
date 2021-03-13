/** @jsx jsx */
import { FC } from 'react';
import { jsx, Label, Themed } from 'theme-ui';
import { Search } from '@component-controls/blocks';
import { Subtitle } from '@component-controls/components';
import { GatsbyLayout } from '../components/GatsbyLayout';

const ErrorPage: FC = () => {
  return (
    <GatsbyLayout type="404">
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          px: 2,
          py: [4, 6],
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <Themed.h1>Page not found</Themed.h1>
          <Subtitle>
            Oops! The page you are looking for has been removed or relocated
          </Subtitle>
          <div
            sx={{
              pt: 4,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Label sx={{ width: 'inherit', mr: 1 }} htmlFor="searchterm">
              search for a term:
            </Label>
            <Search id="searchterm" />
          </div>
        </div>
      </div>
    </GatsbyLayout>
  );
};

export default ErrorPage;
