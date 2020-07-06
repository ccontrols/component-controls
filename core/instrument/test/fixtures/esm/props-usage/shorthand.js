export default {
  title: 'Story',
};

export const story = ({ value }) => (
  <div>{JSON.stringify({ value }, null, 2)}</div>
);
