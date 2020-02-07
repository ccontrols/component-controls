import { ControlTypes } from './types'
import {
  mergeControlValues,
  resetControlValues,
  LoadedComponentControls,
} from './index'

describe('Controls utils', () => {
  const controls: LoadedComponentControls = {
    name: { type: ControlTypes.TEXT, value: 'hello', defaultValue: 'hello' },
    age: { type: ControlTypes.NUMBER, value: 19, defaultValue: 19 },
  }
  const modifiedControls: LoadedComponentControls = {
    name: { type: ControlTypes.TEXT, value: 'today', defaultValue: 'hello' },
    age: { type: ControlTypes.NUMBER, value: 19, defaultValue: 19 },
  }

  it('Should merge property value', () => {
    expect(mergeControlValues(controls, 'name', 'today')).toMatchObject(
      modifiedControls,
    )
  })
  it('Should merge property object', () => {
    expect(
      mergeControlValues(controls, undefined, {
        name: modifiedControls.name.value,
        age: modifiedControls.age.value,
      }),
    ).toMatchObject(modifiedControls)
  })

  it('Should reset property value', () => {
    expect(resetControlValues(modifiedControls, 'name')).toMatchObject(controls)
  })
  it('Should reset property object', () => {
    expect(resetControlValues(modifiedControls)).toMatchObject(controls)
  })
})
