import renderer, { act } from 'react-test-renderer';

const renderErr = () => { throw new Error('Could not render the story'); };
const componentErr = () => { throw new Error('Error rendering component with react-test-renderer')};
