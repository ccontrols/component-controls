import React from 'react';
import { Person } from '../components/Person';

export default {
  title: 'Stories/Person',
  component: Person,
};

export const main = props => <Person {...props} />;
