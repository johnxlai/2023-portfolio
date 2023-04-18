import React from 'react';

const Card = ({ children, className, onClick }) => {
  return (
    <article className={className} onClick={onClick}>
      {children}
    </article>
  );
};

export default Card;
