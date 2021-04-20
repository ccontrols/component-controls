import React, { FC } from 'react';
import styles from './styles.css';

// TODO: some todos

export type ComponentProps = {
  /**
   * custom text to display inside the box
   */
  title: string;
};
export const Component: FC<ComponentProps> = ({ title }) => (
  <div className={styles.container}>{title}</div>
);
