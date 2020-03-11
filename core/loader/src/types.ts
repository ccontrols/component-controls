import {
  InstrumentOptions,
  InstrumentOptionsMDX,
} from '@component-controls/instrument';

export interface PropsLoader {
  name: string;
  include: RegExp | RegExp[];
  exclude?: RegExp | RegExp[];
  options?: any;
}

export type LoaderOptions = {
  type?: 'csf' | 'mdx';
  propsLoaders?: PropsLoader[];
} & (InstrumentOptions | InstrumentOptionsMDX);
