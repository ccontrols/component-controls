import renderer, { act } from 'react-test-renderer';

const renderErr = (): void => { throw new Error('Could not render the story'); };
const componentErr = (): void => { throw new Error('Error rendering component with react-test-renderer')};
