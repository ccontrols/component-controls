export const selectProp = ({ value }) => (
  <div>{JSON.stringify({ value }, null, 2)}</div>
);
