import React from 'react';

const Card = ({ children, className, onClick }) => {
  return (
    <article
      className={`bg-white rounded p-1 md:p-3 ${className}`}
      onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
