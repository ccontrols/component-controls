import { InstrumentOptions } from '@component-controls/instrument';

export interface PresetOptions {
  /**
   * whether to display the addon panel in storybook
   */
  addonPanel?: boolean;
  /**
   * options that will be passed to the instrumenter.
   */
  instrument?: InstrumentOptions;
}
