/** @jsx jsx */
import { FC } from 'react';
import { jsx, Box } from 'theme-ui';

export interface AppErrorProps {
  /**
   * Error text, "apperror" theme key.
   */
  error?: string;
}
/**
 * application build-time error container
 */
export const AppError: FC<AppErrorProps> = ({ error }) => {
  return error ? (
    <Box
      variant="apperror"
      dangerouslySetInnerHTML={{
        __html: error.split('\n').join('<br />'),
      }}
    />
  ) : null;
};
