import React from 'react';
import { Person } from '../components/Person';

export default {
  title: 'Stories/Person',
  component: Person
}

export const main = () => <Person />

export const custom = () => <Person age={55} name="Peter" />