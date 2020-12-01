import React from 'react';
import { Document, Example } from '@component-controls/core';
import {
  ComponentExternalDependencies,
  ComponentLocalDependencies,
} from './ComponentDependencies';
import { mockDecorators } from '../test/MockContext';

export default {
  title: 'Blocks/ComponentDependencies',
  component: ComponentExternalDependencies,
  decorators: mockDecorators,
} as Document;

export const overview: Example = () => <ComponentExternalDependencies />;

export const localDependencies: Example = () => <ComponentLocalDependencies />;
