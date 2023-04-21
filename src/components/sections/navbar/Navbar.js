import Logo from '../../../assets/images/jlai-logo-2023.svg';
import NavItems from './navData';
import React from 'react';
import { IoIosColorPalette } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container flex justify-between items-center">
        <a href="index.html" className="flex items-center">
          <img
            src={Logo}
            alt="John Lai's Logo"
            className="w-[2.5rem] max-w-full mr-4"
          />
          <h1 class="text-white text-xl">JOHN LAI</h1>
        </a>

        <ul className="nav-menu hidden lg:flex gap-3 text-white uppercase font-bold">
          {NavItems.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        {/* <button id="theme-icon" className="text-white cursor-pointer text-3xl">
          <IoIosColorPalette />
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
