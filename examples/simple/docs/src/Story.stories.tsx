import React from 'react';
import { Document, Example } from '@component-controls/core';
import { Component } from '../../src/component';

export default {
  title: 'Main story',
  component: Component,
} as Document;

export const main: Example = () => <Component title="some text" />;
