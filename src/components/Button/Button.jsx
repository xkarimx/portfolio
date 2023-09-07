import React from 'react';
import './Button.css';

export default function Button({ url }) {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button className="custom-btn btn-8" onClick={handleClick}>
      <span>View</span>
    </button>
  );
}
