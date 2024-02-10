import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="w-full border-b-2 z-50 bg-white border-gray-100 fixed">
      <div className="h-16 px-32 max-lg:px-5 py-6 flex flex-row flex-wrap justify-between shadow-sm-bottom">
        <div className="flex justify-start">
          <Link to="/">
            <img
              className="h-4 w-32"
              src="https://zerodha.com/static/images/logo.svg"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex">
          <div
            className={`flex gap-12 mr-12 text-sm text-gray-500 cursor-pointer max-lg:hidden ${isOpen} font-medium`}
          >
            <div className="hover:text-blue-400">
              <NavLink
                to="signup"
                className={({ isActive }) =>
                  `block py-2 pr-4 pl-3 duration-200 ${
                    isActive ? 'text-blue-600' : 'text-gray-500'
                  } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-600 lg:p-0`
                }
              >
                Signup
              </NavLink>
            </div>
            <div className="hover:text-blue-600">About</div>
            <div className="hover:text-blue-600">Products</div>
            <div className="hover:text-blue-600">Pricing</div>
            <div className="hover:text-blue-600">Support</div>
          </div>
          <button
            className="pt-0.5 space-y-1 rounded text-wrap"
            onClick={toggleMenu}
          >
            <span class="block w-4 h-0.5 bg-black"></span>
            <span class="block w-4 h-0.5 bg-black"></span>
            <span class="block w-4 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
