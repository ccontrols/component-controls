import React from 'react';
import { PropsTable } from './PropsTable';
import { Title } from '../../Title';
import { Subtitle } from '../../Subtitle';

export default {
  title: 'Blocks/Core/PropsTable',
  component: Title,
  subcompoents: { Subtitle },
};

export const subcompoents = () => <PropsTable />;
