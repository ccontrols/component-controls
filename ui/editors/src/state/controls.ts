import { useRecoilState, selectorFamily, RecoilState } from 'recoil';
import { ComponentControl, ComponentControls } from '@component-controls/core';

export type RecoilControlSelector = (
  propName: string,
) => RecoilState<ComponentControl | undefined>;

export const useControl = <T extends ComponentControl>(
  name: string,
  recoilSelector: RecoilControlSelector,
): [T, (value: any) => void] => {
  const [control, setControl] = useRecoilState(recoilSelector(name));
  const setValue = (value: any) => {
    if (control) {
      setControl({ ...control, value });
    }
  };
  return [control as T, setValue];
};

export const useControlSelector = (
  controls: ComponentControls,
  onChange: (name: string, value: any) => void,
): RecoilControlSelector => {
  const selector = selectorFamily<ComponentControl | undefined, string>({
    key: 'controls_selector',
    get: name => () => {
      return controls[name];
    },
    set: name => (_, newValue) => {
      onChange(name, newValue);
    },
  });
  return selector;
};
