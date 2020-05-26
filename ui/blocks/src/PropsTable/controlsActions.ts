import React, { MouseEvent } from 'react';
import { window } from 'global';
import copy from 'copy-to-clipboard';
import {
  resetControlValues,
  getControlValues,
  randomizeData,
} from '@component-controls/core';

import {
  ComponentControls,
  SetControlValueFn,
} from '@component-controls/specification';

export interface UseControlsActionsProps {
  controls?: ComponentControls;
  storyId?: string;
  setControlValue?: SetControlValueFn;
}
export const useControlsActions = (props: UseControlsActionsProps) => {
  const { controls, setControlValue, storyId } = props;
  const [copied, setCopied] = React.useState(false);
  if (!controls || !Object.keys(controls).length) {
    return [];
  }
  const onReset = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setControlValue && storyId) {
      const values = resetControlValues(controls);
      setControlValue(storyId, undefined, values);
    }
  };
  const onCopy = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const values = getControlValues(controls);

    copy(JSON.stringify(values, null, 2));
    if (typeof window !== 'undefined') {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    }
  };
  return [
    {
      title: copied ? 'values copied' : 'copy values',
      onClick: onCopy,
      group: 'controls',
      id: 'copy_controls',
      'aria-label': 'copy control values',
    },
    {
      title: 'reset',
      onClick: onReset,
      group: 'controls',
      id: 'reset',
      'aria-label': 'reset control values to their initial value',
    },
    {
      title: 'randomize',
      group: 'controls',
      onClick: () => {
        if (setControlValue && controls && storyId) {
          setControlValue(storyId, undefined, randomizeData(controls));
        }
      },
      id: 'randomize',
      'aria-label': 'generate random values for the component controls',
    },
  ];
};
