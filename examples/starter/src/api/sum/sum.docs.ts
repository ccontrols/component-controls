import { sum } from './sum';

const doc = {
  title: 'Library/api/sum',
  order: 3,
  component: sum,
};

export const overview = ({ a, b }: { a: number; b: number }) => {
  return sum(a, b);
};
overview.controls = {
  a: 1,
  b: 2,
};

export default doc;
