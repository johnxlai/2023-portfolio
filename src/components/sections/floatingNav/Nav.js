import React from 'react';

const nav = ({ className, item }) => {
  return (
    <li className={className}>
      <a href={item.link} className="p-2 rounded-full text-white grid">
        {item.icon}
      </a>
    </li>
  );
};

export default nav;
