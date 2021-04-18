import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Component, ComponentProps } from './Component';

export default {
  title: 'Main story',
  component: Component,
} as Document;

export const main: Example<ComponentProps> = ({ title = 'some text' }) => (
  <Component title={title} />
);
