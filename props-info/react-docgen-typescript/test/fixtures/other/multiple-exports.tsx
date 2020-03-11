import React from 'react';
export interface BarProps {
  prop1: string;
}

export const MyCompoent = (props: BarProps) => <div>{props.prop1}</div>;

export interface ShapeProps {
  bar: BarProps;
  other: number;
}

export const Shape = ({ bar, other }: ShapeProps) => (
  <>
    <MyCompoent {...bar} />
    {other}
  </>
);
