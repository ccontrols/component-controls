import React, { FC } from 'react';

export interface ButtonProps {
  title: string;
}

/** A Button with a hover effect, all properties of Button apply<br />
 * `import { IconButton } from 'grommet-controls';`<br />
 * `<IconButton icon='...' />`<br />
 */
export const Button: FC<ButtonProps & JSX.IntrinsicElements['button']> = ({
  title,
  ...props
}) => <button {...props}>{title}</button>;
