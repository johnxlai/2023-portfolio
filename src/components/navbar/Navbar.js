import Logo from '../../assets/images/jlai-logo-2023.svg';
import NavItems from './navData';
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div className="container nav-container">
        <a href="">
          <img src={Logo} alt="John Lai's Logo" />
        </a>
        <ul className="nav-menu">
          {
            // NavItems is an array of objects
            NavItems.map((item) => (
              <li>
                <a href={item.link}>{item.title}</a>
              </li>
            ))
          }
        </ul>
        <button></button>
      </div>
    </nav>
  );
};

export default Navbar;
