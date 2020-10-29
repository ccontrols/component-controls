/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC } from 'react';

/* @jsx mdx */

//@ts-ignore
import { mdx } from '@mdx-js/react';

const layoutProps = {};

const MDXLayout = 'wrapper';
//@ts-ignore
export const MDXContent: FC<{ components; [key: string]: unknown }> = ({
  components,
  ...props
}) => {
  return (
    //@ts-ignore
    <MDXLayout {...layoutProps} {...props} components={components}>
      <h1>{`Smart controls`}</h1>
    </MDXLayout>
  );
};
//@ts-ignore
MDXContent.isMDXComponent = true;
