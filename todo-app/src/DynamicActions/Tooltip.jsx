import React from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className="tooltip">
      {children}
      <div className="tooltiptext">{text}</div>
    </div>
  );
};

export default Tooltip;
