/** @jsx jsx */
import { jsx, Box } from 'theme-ui';
import { FC } from 'react';
import {
  EditPage,
  Title,
  Subtitle,
  Story,
  Playground,
  Stories,
  Description,
  ComponentSource,
  PropsTable,
  PackageVersion,
} from '@component-controls/blocks';

export const ClassicPage: FC = () => {
  return (
    <div>
      <EditPage />
      <Title sxStyle={{ paddingBottom: 0 }} />
      <Subtitle />
      <PackageVersion />
      <Box
        sx={{
          paddingBottom: 4,
        }}
      />
      <Description />
      <ComponentSource id="." title="Component" />
      <Playground openTab="source" title=".">
        <Story id="." />
      </Playground>
      <PropsTable of="." title="Properties" />
      <Stories dark={true} />
    </div>
  );
};
