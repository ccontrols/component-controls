import React, { FC } from 'react';
import { Description } from '@component-controls/blocks';
import { ViewportBlock } from '../ViewportBlock';
export const ViewportPage: FC = () => (
  <>
    <Description />
    <ViewportBlock title="Viewport" />
  </>
);
