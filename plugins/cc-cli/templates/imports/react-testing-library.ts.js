import { render, act } from '@testing-library/react';

const renderErr = (): void => { throw new Error('Could not render the story'); };
