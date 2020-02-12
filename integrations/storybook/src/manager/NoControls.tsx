import React from 'react';
import { styled } from '@storybook/theming';

const Container = styled.div`
  padding: 30px;
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}  
`;

const Title = styled.div`
  font-weight: 700;
}
`;
export const NoControls = () => (
  <Container>
    <Title>No controls found</Title>
    <div>
      Learn how to&nbsp;
      <a
        href="https://github.com/ccontrols/component-controls/tree/master/integrations/storybook/README.md"
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
      >
        dynamically interact with components
      </a>
    </div>
  </Container>
);
