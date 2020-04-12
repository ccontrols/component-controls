import React from 'react';

export const story = ({ showOptional }) => {
  return (
    <>
      <div>I must be here</div>
      {showOptional === 'yes' ? <div>Optional, I can disappear</div> : null}
    </>
  );
};
