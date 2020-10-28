export * from './build';
export * from './components';
export * from './configuration';
export * from './controls';
export * from './controls-utils';
export * from './deepMerge';
export * from './propsInfo';
export * from './document';
export * from './document-utils';
export * from './utility';
export { randomizeData, canRandomizeControl } from './controls-randomize';
export * from './controls-smart';
export * from './source';
export * from './faker';

export type SetControlValueFn = (
  storyId: string,
  propertyName: string | undefined,
  value: any,
) => void;
export type ClickControlFn = (storyId: string, propertyName: string) => void;

export const normalizePath = (fillePath: string): string =>
  process.platform === 'win32' ? fillePath.replace(/\\/g, '\\\\') : fillePath;
