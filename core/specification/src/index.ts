export * from './story-controls'

export * from './controls-utils'

export type SetControlValueFn = (
  storyId: string,
  propertyName: string | undefined,
  value: any,
) => void
export type ClickControlFn = (storyId: string, propertyName: string) => void

export type ResetControlValueFn = (
  storyId: string,
  propertyName?: string,
) => void
