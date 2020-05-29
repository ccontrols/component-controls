import React, { FC, createContext } from 'react';
import { Button, ButtonProps } from 'theme-ui';
import Octicon, { ThreeBars } from '@primer/octicons-react';

export type SidebarToggleProps = {
  icon?: React.ReactNode;
} & ButtonProps;

export interface SidebarContextProps {
  SidebarToggle: FC<SidebarToggleProps>;
  collapsed?: boolean;
  collapsible?: boolean;
  setCollapsed: (value: boolean) => void;
}
export const SidebarContext = createContext<SidebarContextProps>({
  SidebarToggle: () => null,
  setCollapsed: () => {},
});
export interface SidebarContextProviderProps {
  collapsible?: boolean;
}
export const SidebarContextProvider: FC<SidebarContextProviderProps> = ({
  children,
  collapsible = true,
}) => {
  const [collapsed, setCollapsed] = React.useState<boolean | undefined>(
    undefined,
  );
  const SidebarToggle: FC<SidebarToggleProps> = ({ icon, ...rest }) => {
    console.log(collapsible);
    return collapsible ? (
      <Button
        aria-label={collapsed ? 'Expand side bar' : 'Collapse side bar'}
        onClick={() => setCollapsed(!collapsed)}
        {...rest}
      >
        {icon || <Octicon icon={ThreeBars} />}
      </Button>
    ) : null;
  };
  return (
    <SidebarContext.Provider
      value={{
        collapsed,
        setCollapsed,
        SidebarToggle,
        collapsible,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
