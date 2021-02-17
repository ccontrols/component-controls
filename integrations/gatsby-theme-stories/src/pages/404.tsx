import React, { FC } from 'react';
import { Label, Themed } from 'theme-ui';
import { Search } from '@component-controls/blocks';
import { Subtitle } from '@component-controls/components';
import { Layout } from '../components/Layout';

const ErrorPage: FC = () => {
  return (
    <Layout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          paddingTop: 128,
          paddingBottom: 128,
        }}
      >
        <div style={{ maxWidth: 800 }}>
          <Themed.h1>Page not found</Themed.h1>
          <Subtitle>
            Oops! The page you are looking for has been removed or relocated
          </Subtitle>
          <div
            style={{
              paddingTop: 16,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Label
              style={{ width: 'inherit', marginRight: 2 }}
              htmlFor="searchterm"
            >
              search for a term:
            </Label>
            <Search id="searchterm" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
