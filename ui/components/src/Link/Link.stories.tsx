import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Link } from '.';

export default {
  title: 'Components/Link',
  component: Link,
  category: 'Navigation',
} as Document;

export const overview: Example = () => <Link href="/">link to home</Link>;
