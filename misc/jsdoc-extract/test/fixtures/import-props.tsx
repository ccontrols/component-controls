import React, { FC } from 'react';
import { ColumnProps } from './type-props';

export const Column: FC<ColumnProps> = props => <div {...props} />;
