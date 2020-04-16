/* eslint-disable @typescript-eslint/no-unused-vars */

import React from 'react';
/* @jsx mdx */
import { mdx } from '@mdx-js/react';

const layoutProps = {};

const MDXLayout = 'wrapper';
//@ts-ignore
export function MDXContent({ components, ...props }) {
  return (
    //@ts-ignore
    <MDXLayout {...layoutProps} {...props} components={components}>
      <h1>{`Smart controls`}</h1>
    </MDXLayout>
  );
}

MDXContent.isMDXComponent = true;
