import React from 'react';
import './Button.css';

export default function Button({ url }) {
  const handleClick = () => {
    window.open(url, '_blank');
  };

  return (
    <button className="custom-btn btn-8" onClick={handleClick}>
      <span>View</span>
    </button>
  );
}
