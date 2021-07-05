import React, { FC } from 'react';
import ReactJson from 'react-json-tree';
import { useTheme } from '@component-controls/components';

export type ReactJSONProps = Partial<ReactJson['props']>;
export const JSONViewer: FC<ReactJSONProps> = props => {
  const theme = useTheme();
  return (
    <ReactJson
      hideRoot={true}
      shouldExpandNode={(
        keyPath: (string | number)[],
        data: any,
        level: number,
      ) => {
        return level === 1;
      }}
      theme={{
        base00: theme.colors?.background as string,
        base03: theme.colors?.muted as string,
        base0B: theme.colors?.accent as string,
        base0D: theme.colors?.text as string,
      }}
      invertTheme={false}
      {...props}
    />
  );
};
