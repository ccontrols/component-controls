import React, { FC, createContext, useContext } from 'react';
import { Link, LinkProps, Box } from 'theme-ui';

export type LinkClassType = React.FC<LinkProps>;
const LinkContext = createContext<LinkClassType>(Link);
export interface LinkContextProviderProps {
  linkClass: LinkClassType;
}
export const LinkContextProvider: FC<LinkContextProviderProps> = ({
  linkClass: LinkClass,
  children,
}) => {
  return (
    <LinkContext.Provider
      value={(props: any) => (
        <Box variant="styles.a" as={LinkClass} {...props} />
      )}
    >
      {children}
    </LinkContext.Provider>
  );
};
export const useGetLinkClass = (): FC<LinkProps> => {
  return useContext(LinkContext) || Link;
};
