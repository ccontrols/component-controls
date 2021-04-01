import { render, act } from '@testing-library/react';

const renderErr = () => { throw new Error('Could not render the story'); };
