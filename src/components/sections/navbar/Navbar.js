import Logo from '../../../assets/images/jlai-logo-2023.svg';
import NavItems from './navData';
import React from 'react';
import { IoIosColorPalette } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav className="navbar navbar-angled">
      <div className="container flex justify-between items-center px-4 xl:px-0  py-4 md:py-8">
        <a href="index.html" className="flex items-center">
          <img
            src={Logo}
            alt="John Lai's Logo"
            className="w-[2.5rem] max-w-full mr-4"
          />
          <h2 className="text-white text-xl">JOHN LAI</h2>
        </a>

        <ul className="nav-menu nav-menu-angled hidden lg:flex gap-3 text-secondary uppercase font-bold font-roboto ">
          {NavItems.map((item) => (
            <li key={item.id}>
              <a className="hover:text-tertiary" href={item.link}>
                {item.title}
              </a>
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
