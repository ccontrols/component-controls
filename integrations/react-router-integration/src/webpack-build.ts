import { BuildProps } from '@component-controls/core';
import { asyncWebpackConfig } from '@component-controls/base-integration/webpack-build';

export const withComponentControls = (props: {
  config: any;
  options?: BuildProps;
}) => async (): Promise<any> => asyncWebpackConfig(props);
