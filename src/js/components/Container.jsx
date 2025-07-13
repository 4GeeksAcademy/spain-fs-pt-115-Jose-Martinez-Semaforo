import React from 'react';
import '../../styles/index.css';

const Container = ({ children }) => {
  return (
    <div className="text-container">
      {children}
    </div>
  );
};

export default Container;