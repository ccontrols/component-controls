import React, { FC } from 'react';
export interface BarProps {
  prop1: string;
}

export const MyCompoent: FC<BarProps> = props => <div>{props.prop1}</div>;

export interface ShapeProps {
  bar: BarProps;
  other: number;
}

export const Shape: FC<ShapeProps> = ({ bar, other }) => (
  <>
    <MyCompoent {...bar} />
    {other}
  </>
);
