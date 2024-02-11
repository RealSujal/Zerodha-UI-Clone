import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../HamburgerMenu/Menu';
import Burger from '../HamburgerMenu/Burger';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const menu = () => {
    return isOpen ? <Burger /> : null;
  };
  const click = () => {
    setOpen(isOpen(false));
  };
  return (
    <>
      <div className="w-full border-b-2 z-10 bg-white border-gray-100 fixed">
        <div
          className={`h-16 px-32 max-lg:px-5 py-6 flex flex-row flex-wrap justify-between shadow-sm-bottom`}
        >
          <div className="flex justify-start">
            <Link to="/" onClick={click}>
              <img
                className="h-4 w-32"
                src="https://zerodha.com/static/images/logo.svg"
                alt="logo"
              />
            </Link>
          </div>
          <div className="flex">
            <div className="max-lg:hidden">
              <Menu />
            </div>
            <button
              className="pt-0.5 space-y-1 rounded text-wrap z-50"
              onClick={toggleMenu}
            >
              <span class="block w-4 h-0.5 bg-black"></span>
              <span class="block w-4 h-0.5 bg-black"></span>
              <span class="block w-4 h-0.5 bg-black"></span>
            </button>
          </div>
        </div>
      </div>
      {menu()};
    </>
  );
}

export default Header;
