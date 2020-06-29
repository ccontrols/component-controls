/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box, Label } from 'theme-ui';
import { Search } from '@component-controls/blocks';
import { Title, Subtitle } from '@component-controls/components';
import { Layout } from '../components/Layout';

const ErrorPage: FC = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1,
          py: 6,
        }}
      >
        <Box sx={{ maxWidth: 800 }}>
          <Title>Page not found</Title>
          <Subtitle>
            Oops! The page you are looking for has been removed or relocated
          </Subtitle>
          <Box
            sx={{
              pt: 4,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Label sx={{ width: 'inherit', mr: 2 }} htmlFor="searchterm">
              search for a term:
            </Label>
            <Search id="searchterm" />
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default ErrorPage;
