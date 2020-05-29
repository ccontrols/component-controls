import {
  cloneElement,
  FC,
  useCallback,
  useEffect,
  Children,
  ReactElement,
} from 'react';

type KeyboardCallback = (key: number) => void;

export interface KeyboardProps {
  /**
   * array of the keys to be trapped
   */
  keys: number[];
  /**
   * to where to attach the event handler
   */
  target?: 'children' | 'document' | 'window';
  /**
   * callbal on key down
   */
  onKeyDown: KeyboardCallback;
  /**
   * child element to the key event handler will be attached to if target = 'children'
   */
  children?: ReactElement;
}

export const LEFT_ARROW = 37;
export const UP_ARROW = 38;
export const RIGHT_ARROW = 39;
export const DOWN_ARROW = 40;

/**
 * Componet to monitor keystrokes. Can attach to child, document or window.
 */
export const Keyboard: FC<KeyboardProps> = ({
  target = 'children',
  keys,
  onKeyDown,
  children,
}) => {
  const onKeyDownFn = useCallback(
    (event: KeyboardEvent) => {
      const key = event.keyCode ? event.keyCode : event.which;
      if (keys.includes(key)) {
        event.preventDefault();
        onKeyDown(key);
      }
    },
    [keys, onKeyDown],
  );

  useEffect(() => {
    if (target === 'document') {
      document.addEventListener('keydown', onKeyDownFn);
    } else if (target === 'window') {
      window.addEventListener('keydown', onKeyDownFn);
    }

    return () => {
      if (target === 'document') {
        document.removeEventListener('keydown', onKeyDownFn);
      } else if (target === 'window') {
        window.removeEventListener('keydown', onKeyDownFn);
      }
    };
  }, [onKeyDownFn, target]);
  if (target === 'children' && children) {
    return cloneElement(Children.only(children), {
      onKeyDown: onKeyDownFn,
    });
  }

  return children || null;
};
