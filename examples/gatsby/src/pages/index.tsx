import React, { FC } from 'react';
const { store } = require('@component-controls/gatsby-plugin-stories');

const Index: FC = () => <div>Hello{console.log(store)}</div>;

export default Index;
