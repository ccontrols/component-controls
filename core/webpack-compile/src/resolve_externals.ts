import * as webpack from 'webpack';

export interface ResolveExternalsConfig {
  resolve: { alias: { [key: string]: string } };
  externals: webpack.ExternalsObjectElement;
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
  addAlias = (props: ExternalProps) => {
    const { lib, externalName } = props;
    this._config.externals[lib] = externalName || lib;
  };
}
