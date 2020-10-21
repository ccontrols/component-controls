import React, { FC } from 'react';
import './styles.css';
export type ComponentProps = {
  title: string;
};
export const Component: FC<ComponentProps> = ({ title }) => (
  <div className="container">{title}</div>
);
