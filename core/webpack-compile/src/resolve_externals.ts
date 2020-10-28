import { Configuration } from 'webpack';

export interface ResolveExternalsConfig {
  resolve: { alias: { [key: string]: string } };
  externals: Configuration['externals'];
}

export interface ExternalProps {
  lib: string;
  externalName?: string | { [key: string]: string };
}

export class ResolveExternals {
  private _config: ResolveExternalsConfig;
  constructor(config: ResolveExternalsConfig) {
    this._config = config;
  }
  addAlias = (props: ExternalProps): void => {
    const { lib, externalName } = props;
    if (typeof this._config.externals !== 'object') {
      this._config.externals = {};
    }
    (this._config.externals as Record<string, unknown>)[lib] =
      externalName || lib;
  };
}
