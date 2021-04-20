import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Component, ComponentProps } from './Component';

export default {
  title: 'Component story',
  component: Component,
} as Document;

export const main: Example<ComponentProps> = ({ title = 'some text' }) => (
  <Component title={title} />
);
