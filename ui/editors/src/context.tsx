import React, { FC, useContext } from 'react';
import {
  ComponentControlBase,
  ComponentControl,
  ComponentControls,
} from '@component-controls/specification';

export type PropertyOnClick = (prop: ComponentControl) => any;

export interface ControlsContextProps {
  /**
   * controls for to current context.
   */
  controls: ComponentControls;

  /**
   *  onChange event called when the propery is changing
   */
  onChange: (name: string, prop: any) => void;

  /**
   * onClick event handler for Button type property editors.
   */
  onClick?: PropertyOnClick;
}

/**
 * Controls context, provides access to the values and property setters
 */
//@ts-ignore
export const ControlsContext = React.createContext<ControlsContextProps>({});

/**
 * controls context hook for a control editor
 */
export const useControlContext = <T extends ComponentControlBase<any>>({
  name,
}: {
  /**
   * name of the property control.
   */
  name: string;
}): Omit<ControlsContextProps, 'controls'> & { control: T } => {
  const { controls, onChange, onClick } = useContext(ControlsContext);
  const control = controls[name];
  return { control, onChange, onClick };
};

/**
 *
 * controls context provider
 */
export const ConrolsContextProvider: FC<ControlsContextProps> = ({
  children,
  ...rest
}) => {
  return (
    <ControlsContext.Provider value={rest}>{children}</ControlsContext.Provider>
  );
};
