export const myStory = ({ name: { first, last }, age }) => (
  <>
    <Story first={first} last={last} />
    <Age value={age} />
  </>
);
