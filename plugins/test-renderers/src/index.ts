export { renderExample } from './render-example';
export { renderDocument } from './render-document';
export { reactRunDOM } from './react-run-dom';

export const renderErr = (): void => {
  throw new Error('Could not render the story');
};

export const componentErr = (): void => {
  throw new Error('Error rendering component with react-test-renderer');
};
