import {
  InstrumentOptions,
  InstrumentOptionsMDX,
} from '@component-controls/instrument';

export type LoaderOptions = {
  type?: 'csf' | 'mdx';
} & (InstrumentOptions | InstrumentOptionsMDX);
