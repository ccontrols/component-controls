import React, { FC } from 'react';
import styles from './styles.css';

// TODO: some todos

export type ComponentProps = {
  title: string;
};
export const Component: FC<ComponentProps> = ({ title }) => (
  <div className={styles.container}>{title}</div>
);
