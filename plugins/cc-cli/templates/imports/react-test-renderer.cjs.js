const renderer = require('react-test-renderer');
const act = renderer.act;

const renderErr = () => { throw new Error('Could not render the story'); };
const componentErr = () => { throw new Error('Error rendering component with react-test-renderer')};
