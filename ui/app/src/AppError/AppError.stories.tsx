/** @jsx jsx */
import { jsx } from 'theme-ui';
import { ControlTypes, Example } from '@component-controls/core';
import { AppError, AppErrorProps } from './AppError';

export default {
  title: 'Application/AppError',
  component: AppError,
  category: 'Application',
};

export const overview: Example<AppErrorProps> = ({ error }) => (
  <AppError error={error} />
);

overview.controls = {
  error: {
    type: ControlTypes.TEXT,
    rows: 4,
    value: `some error
text
`,
  },
};
