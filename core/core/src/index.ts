export * from './components';
export * from './configuration';
export * from './controls';
export * from './deepMerge';
export * from './propsInfo';
export * from './stories';
export * from './utility';
export * from './utils';
export { randomizeData } from './randomizeData';
export * from './smartControls';
export * from './source';
export * from './faker';

export type SetControlValueFn = (
  storyId: string,
  propertyName: string | undefined,
  value: any,
) => void;
export type ClickControlFn = (storyId: string, propertyName: string) => void;
