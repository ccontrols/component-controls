export * from './components';
export * from './configuration';
export * from './controls';
export * from './deepMerge';
export * from './propsInfo';
export * from './stories';
export * from './utility';

export type SetControlValueFn = (
  storyId: string,
  propertyName: string | undefined,
  value: any,
) => void;
export type ClickControlFn = (storyId: string, propertyName: string) => void;
