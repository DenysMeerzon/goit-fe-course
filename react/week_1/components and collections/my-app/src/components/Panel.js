import React from 'react';

const Panel = ({ title, children }) => (
  <div style={{ border: '1px solid black' }}>
    {title && <h1>{title}</h1>}
    {children}
  </div>
);

export default Panel;
