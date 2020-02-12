import React from 'react';
import { Placeholder, Link } from '@storybook/components';

export const NoControls = () => (
  <Placeholder>
    <>No controls found</>
    <>
      Learn how to&nbsp;
      <Link
        href="https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/README.md"
        target="_blank"
        withArrow
        cancel={false}
      >
        dynamically interact with components
      </Link>
    </>
  </Placeholder>
);
