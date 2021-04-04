const { render, act } = require('@testing-library/react');

const renderErr = () => { throw new Error('Could not render the story'); };
